interface Colors {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  }
  
  export const colors: Colors = {
    primary: "#2196f3",
    secondary: "#ffc107",
    background: "#fff",
    text: "#333",
  };

  interface Typography {
    font: string;
    fontSizes: {
      small: number;
      medium: number;
      large: number;
    };
  }
  
  export const typography: Typography = {
    font: "Roboto",
    fontSizes: {
      small: 12,
      medium: 16,
      large: 24,
    },
  };

  interface Spacing {
    small: number;
    medium: number;
    large: number;
  }
  
  interface Layout {
    padding: Spacing;
    margin: Spacing;
  }
  
  export const spacing: Spacing = {
    small: 8,
    medium: 16,
    large: 24,
  };
  
  export const layout: Layout = {
    padding: spacing,
    margin: spacing,
  };

  interface Theme {
    colors: Colors,
    typography: Typography,
    spacing: Spacing,
    layout: Layout
  }

  export const theme: Theme = {
    colors: colors,
    typography: typography,
    spacing: spacing,
    layout: layout
  }