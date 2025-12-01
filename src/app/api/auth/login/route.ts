import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  // Hardcoded password for app access
  const correctPassword = "vtsai2025";

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });

    // Set a secure HTTP-only cookie
    response.cookies.set("auth-token", "authenticated", {
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } else {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
}
