export type MarketMetadata = {
  category?: string;
  market?: string;
  submarket?: string;
  industry?: string;
  buildingClass?: string;
  size?: string;
};

export type MarketData = {
  label: string;
  value: string;
};

export type MarketAnalysisData = {
  marketMetadata?: MarketMetadata;
  marketData?: MarketData[];
  keyInsights?: string[];
  suggestedFollowUps?: string[];
  summary?: string[];
};

export type VtsAiPrompt = {
  prompt: string;
  payload: MarketAnalysisData;
};

export const vtsAiPromptsWithContext: VtsAiPrompt[] = [
  {
    prompt: "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending month-over-month?",
        "What tenants are driving demand?",
        "Where to deploy resources for tour-driven growth?",
      ],
    },
  },
  {
    prompt: "How are rents trending month-over-month?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What's the average NER right now?",
        "What space sizes are most in demand right now?",
        "Where should I allocate capital based on current market conditions?",
      ],
    },
  },
  {
    prompt: "How are concessions trending month-over-month?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      ],
      suggestedFollowUps: [
        "How are lease durations trending?",
        "What is the average size of active requirements right now?",
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
      ],
    },
  },
  {
    prompt: "What's the average NER right now?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.",
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending month-over-month?",
        "What industries are boosting demand?",
        "Where to allocate capital per lease data?",
      ],
    },
  },
  {
    prompt: "How are lease durations trending?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are concessions trending month-over-month?",
        "Where should I prioritize capital allocation based on current velocity?",
        "What space sizes are most in demand right now?",
      ],
    },
  },
  {
    prompt: "What are the top industries driving demand right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending month-over-month?",
        "What is the average size of active requirements right now?",
        "Where to deploy resources for tour-driven growth?",
      ],
    },
  },
  {
    prompt: "What space sizes are most in demand right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What tenants are driving demand?",
        "What's the average NER right now?",
        "Where should I allocate capital based on current market conditions?",
      ],
    },
  },
  {
    prompt: "What industries are boosting demand?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are lease durations trending?",
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
        "Where should I prioritize capital allocation based on current velocity?",
      ],
    },
  },
  {
    prompt: "What tenants are driving demand?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What industries are boosting demand?",
        "Where to allocate capital per lease data?",
        "What are the top industries driving demand right now?",
      ],
    },
  },
  {
    prompt: "What is the average size of active requirements right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are concessions trending month-over-month?",
        "Where to deploy resources for tour-driven growth?",
        "What space sizes are most in demand right now?",
      ],
    },
  },
  {
    prompt: "Where should I allocate capital based on current market conditions?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
        "How are rents trending month-over-month?",
        "What tenants are driving demand?",
      ],
    },
  },
  {
    prompt: "Where should I prioritize capital allocation based on current velocity?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Where to allocate capital per lease data?",
        "What's the average NER right now?",
        "How are concessions trending month-over-month?",
      ],
    },
  },
  {
    prompt: "Where to allocate capital per lease data?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What is the average size of active requirements right now?",
        "How are lease durations trending?",
        "What industries are boosting demand?",
      ],
    },
  },
  {
    prompt: "Where to deploy resources for tour-driven growth?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What are the top industries driving demand right now?",
        "Where should I allocate capital based on current market conditions?",
        "What space sizes are most in demand right now?",
        "Portfolio Agent",
      ],
    },
  },
  {
    prompt: "Portfolio Agent",
    payload: {
      marketMetadata: {
        category: "Portfolio Agent",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      ],
      keyInsights: [
        "Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      ],
      suggestedFollowUps: [
        "Which markets are attractive for investment based on tour activity?",
        "Which submarkets are leading in active demand this month?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "What's the average rent right now?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
        "What is the typical TI allowance currently?",
      ],
    },
  },
  {
    prompt: "How are rents trending year-over-year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are concessions trending year over year?",
        "What tenants are driving demand?",
        "Which markets are attractive for investment via tour data?",
      ],
    },
  },
  {
    prompt: "How are concessions trending year over year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How are gross rents trending year-over-year?",
        "Which submarkets are leading in active demand this month?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
  {
    prompt: "How are gross rents trending year-over-year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "How has starting rent changed year-over-year?",
        "Which markets are best for investment per demand trends?",
        "What's the average rent right now?",
      ],
    },
  },
  {
    prompt: "How has starting rent changed year-over-year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What is the typical TI allowance currently?",
        "Which markets are attractive for investment based on tour activity?",
        "How are rents trending year-over-year?",
      ],
    },
  },
  {
    prompt: "What is the typical TI allowance currently?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which submarkets are seeing the most tenant tour activity right now?",
        "How are concessions trending year over year?",
        "Which markets are best for investment per demand trends?",
      ],
    },
  },
  // Market Demand
  {
    prompt: "Which submarkets are seeing the most tenant tour activity right now?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which submarkets have the highest unique tenant tours this month?",
        "How are gross rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
      ],
    },
  },
  {
    prompt: "Which submarkets have the highest unique tenant tours this month?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which submarkets are leading in active demand this month?",
        "How has starting rent changed year-over-year?",
        "Which markets are attractive for investment via tour data?",
      ],
    },
  },
  {
    prompt: "Which submarkets are leading in active demand this month?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "What tenants are driving demand?",
        "What is the typical TI allowance currently?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
  {
    prompt: "What tenants are driving demand?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets are most attractive for investment based on demand trends?",
        "What's the average rent right now?",
        "How are rents trending year-over-year?",
      ],
    },
  },
  {
    prompt: "What are my top 5 largest vacant spaces with no active deals in Canada?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "The 5 largest vacant spaces in Canada with no active deals total 817,885 square feet. The largest is a 286,805 sq ft space in '8039 Fifth Line' (Space 0002A).",
      ],
      keyInsights: [
        "The top 5 spaces are:",
        "1. '8039 Fifth Line' (Space 0002A) at 286,805 sq ft",
        "2. '5744 - 268 Street' (Space 5744) at 156,513 sq ft",
        "3. 'Rangewinds - Bldg F' (Space 5600) at 137,360 sq ft",
        "4. 'St Vital Centre' (Space 0001) at 122,002 sq ft",
        "5. 'Eglinton Square' (Space 0000) at 115,205 sq ft",
        "",
        "These 5 spaces account for 23.5% of the total 3,477,770 square feet of vacant space listed.",
        "The largest space, 286,805 sq ft in '8039 Fifth Line', represents 8.2% of the total vacant space by itself.",
      ],
      suggestedFollowUps: [
        "How are concessions trending year over year?",
        "Which submarkets have the highest unique tenant tours this month?",
      ],
    },
  },
  {
    prompt: "Which markets are attractive for investment based on tour activity?",
    payload: {
      marketMetadata: {
        category: "Market Demand",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      keyInsights: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec sed odio dui.",
      ],
      suggestedFollowUps: [
        "Which markets are best for investment per demand trends?",
        "How are gross rents trending year-over-year?",
        "What tenants are driving demand?",
      ],
    },
  },
  {
    prompt: "Which Canadian tenants have negative tenant sentiment updates as the most recent sentiment?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "The data shows 6 Canadian tenants whose most recent sentiment update is 'negative'.",
      ],
      keyInsights: [
        "The 6 tenants are:",
        "- 'Champion Petfoods Holding Inc.'",
        "- '1768829 Ontario Inc.'",
        "- 'Cole International Inc.'",
        "- 'SysGen Solutions Group Ltd.'",
        "- 'Wade Consulting Inc.'",
        "- 'Calgary Tracparts Ltd.'",
        "",
        "The dates for these 'negative' status updates range from September 2021 to February 2025.",
      ],
      suggestedFollowUps: [
        "What are my top 5 largest vacant spaces with no active deals in Canada?",
        "What are the largest Canadian tenants with leases expiring within the next 18 months?",
        "Show me my largest tenants that have space with us in both the US and Canada along with their lease expirations",
      ],
    },
  },
  {
    prompt: "What are the largest Canadian tenants with leases expiring within the next 18 months?",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "Within the 18-month lease roll, 211 unique tenants were identified as Canadian, totaling 2,735,249 square feet.",
        "",
        "The largest are:",
        "- 'Samsung Electronics Canada Inc.' (435K sq ft)",
        "- 'Kyndryl Canada Limited' (330K sq ft)",
        "- 'The Bank Of Nova Scotia' (250K sq ft)",
      ],
      keyInsights: [
        "The top 3 tenants account for 1,014,993 square feet, representing 37.1% of the total expiring square footage for Canadian-identified tenants.",
        "",
        "The 5 largest Canadian tenants by expiring area are:",
        "1. 'Samsung Electronics Canada Inc.' (434,998 sq ft)",
        "2. 'Kyndryl Canada Limited' (330,326 sq ft)",
        "3. 'The Bank Of Nova Scotia' (249,669 sq ft)",
        "4. 'Albea Canada Inc.' (128,467 sq ft)",
        "5. 'Alberta Health Services' (108,971 sq ft)",
        "",
        "The smallest single expiring lease identified as Canadian is 0 square feet for 'Innovative Vending Solutions-Canada, ULC'.",
      ],
      suggestedFollowUps: [
        "Which Canadian tenants have negative tenant sentiment updates as the most recent sentiment?",
        "What are my top 5 largest vacant spaces with no active deals in Canada?",
        "Show me my largest tenants that have space with us in both the US and Canada along with their lease expirations",
      ],
    },
  },
  {
    prompt: "Show me my largest tenants that have space with us in both the US and Canada along with their lease expirations",
    payload: {
      marketMetadata: {
        category: "Strategic Planning",
      },
      summary: [
        "TD Bank: Holds 4 leases across both countries (1 in the US, 3 in Canada), totaling 22,470 RSF and generating $2,366,079 in revenue.",
        "",
        "Benjamin Moore & Co.: Has 2 leases (1 in each country) for a combined 221,151 RSF and $4,310,785 in revenue.",
      ],
      keyInsights: [
        "Benjamin Moore & Co.:",
        "- Most valuable lease: '8350 Pardee' (US), 141,844 sq ft generating $2.95M at $20.82/sf, expires February 28, 2027",
        "- Second lease: 'Saint Laurent Industrial' (Canada), 79,307 sq ft generating $1.36M at $17.12/sf, expires April 30, 2030",
        "",
        "TD Bank's portfolio:",
        "- US lease: '685 Third Avenue' (4,845 sq ft), generates $1.14M at $236.03/sf, expires October 31, 2031",
        "- Canadian retail-center leases:",
        "  • 'North Hill Shopping Centre' (expires February 28, 2027, at $79.30/sf)",
        "  • 'Eglinton Square' (expires June 30, 2027, at $67.07/sf)",
        "  • 'Westgate Shopping Centre' (expires February 29, 2028, at $59.72/sf)",
        "",
        "Critical expiration date: February 28, 2027 is a critical date, as both TD Bank's 'North Hill' lease (at $79.30/sf) and Benjamin Moore's high-revenue '8350 Pardee' lease (at $20.82/sf) expire. This is followed just four months later by TD Bank's 'Eglinton Square' lease on June 30, 2027, grouping three of the six leases into a key renewal period.",
      ],
      suggestedFollowUps: [
        "What's the average rent right now?",
        "How are rents trending year-over-year?",
        "Which markets are most attractive for investment based on demand trends?",
        "Portfolio Agent",
      ],
    },
  },
  {
    prompt: "Portfolio Agent",
    payload: {
      marketMetadata: {
        category: "Portfolio Agent",
      },
      summary: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      ],
      keyInsights: [
        "Curabitur blandit tempus porttitor. Donec sed odio dui.",
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      ],
      suggestedFollowUps: [
        "Which markets are attractive for investment based on tour activity?",
        "Which submarkets are leading in active demand this month?",
        "Which markets show strongest demand growth for investment?",
      ],
    },
  },
];
