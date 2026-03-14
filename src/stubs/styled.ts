import styled, { ThemeProvider, DefaultTheme } from "styled-components";

export default styled;
export { ThemeProvider };
export type { DefaultTheme };

export const defaultTheme: DefaultTheme = {
  // Minimal theme object with breakpoints used in banner styles
  breakpoints: {
    values: {
      xl: 1440,
      lg: 1366,
      desktop: 1280,
      md: 1024,
      laptop: 992,
      tablet: 768,
      sm: 600,
      s: 480,
      mobile: 375
    }
  }
} as unknown as DefaultTheme;

