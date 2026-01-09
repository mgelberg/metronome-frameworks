export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    bg: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    panel: string;
    border: string;
  };
  typography: {
    heading: string;
    body: string;
  };
  vibe: string; // Description for the AI
}

export interface BrandVoice {
  tagline: string;
  missionStatement: string;
  keywords: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
