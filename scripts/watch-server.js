#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

let serverProcess = null;
let buildId = null;
let restartTimeout = null;

const BUILD_ID_PATH = path.join(__dirname, '..', '.next', 'BUILD_ID');
const RESTART_DELAY = 2000; // Wait 2 seconds after build completes

function startServer() {
  if (serverProcess) {
    console.log('[SERVER] Stopping server...');
    serverProcess.kill('SIGTERM');
    serverProcess = null;
  }

  console.log('[SERVER] Starting server...');
  serverProcess = spawn('npm', ['run', 'start'], {
    stdio: 'inherit',
    shell: true
  });

  serverProcess.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.log(`[SERVER] Server exited with code ${code}`);
    }
    serverProcess = null;
  });

  serverProcess.on('error', (err) => {
    console.error('[SERVER] Error starting server:', err);
    serverProcess = null;
  });
}

function checkBuildComplete() {
  try {
    if (fs.existsSync(BUILD_ID_PATH)) {
      const currentBuildId = fs.readFileSync(BUILD_ID_PATH, 'utf8').trim();
      
      if (currentBuildId !== buildId) {
        buildId = currentBuildId;
        
        // Clear any pending restart
        if (restartTimeout) {
          clearTimeout(restartTimeout);
        }
        
        // Wait a bit for build to fully complete, then restart
        restartTimeout = setTimeout(() => {
          console.log('[SERVER] Build complete, restarting server...');
          startServer();
        }, RESTART_DELAY);
      }
    }
  } catch (err) {
    // Build ID file doesn't exist yet, that's okay
  }
}

// Watch for BUILD_ID changes
console.log('[SERVER] Watching for build completion...');
fs.watchFile(BUILD_ID_PATH, { interval: 1000 }, () => {
  checkBuildComplete();
});

// Initial check
checkBuildComplete();

// Start server if build already exists
if (fs.existsSync(BUILD_ID_PATH)) {
  startServer();
}

// Cleanup on exit
process.on('SIGINT', () => {
  console.log('\n[SERVER] Shutting down...');
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
  fs.unwatchFile(BUILD_ID_PATH);
  process.exit(0);
});

process.on('SIGTERM', () => {
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
  fs.unwatchFile(BUILD_ID_PATH);
  process.exit(0);
});

