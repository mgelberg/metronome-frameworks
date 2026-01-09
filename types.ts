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
  vibe: string;
}

export interface NavItem {
  label: string;
  href: string;
}
