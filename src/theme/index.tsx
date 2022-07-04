import { createTheme } from "@mui/material";
import "@fontsource/inter";

export interface ColorMap {
  [name: string]: string;
}

export const COLORS: ColorMap = {
  GAMMA_TEXT_HIGH_EMPHASIS: "#2D2A38",
  GAMMA_TEXT_MEDIUM_EMPHASIS: "#5A5766",
  GAMMA_TEXT_LOW_EMPHASIS: "#757380",
  GAMMA_ALERTS_RED_200: "#FC5C5C",
  GAMMA_ALERTS_RED_500: "#DA4D4D",
  GAMMA_GREY_50: "#F8F8FA",
  GAMMA_GREY_100: "#E9E8ED",
  GAMMA_GREY_200: "#D4D2D9",
  GAMMA_GREY_300: "#9F9DA6",
  GAMMA_GREY_500: "#6D6C73",
  GAMMA_GREY_700: "#3C3B40",
  LIGHT_GREY: "#F6F5F7",
  LIGHT_BLUE: "#C6CEF7",
  PRIMARY_GRADIENT: "#6B4DE0",
  WHITE: "#FFFFFF",
  BUTTON_TEXT: "#FAFAFC",
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    overline2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    caption5: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    overline2?: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    caption5: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    overline2: true;
    caption1: true;
    caption2: true;
    caption3: true;
    caption4: true;
    caption5: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#F2F5FF",
      100: "#C6CEF7",
      300: "#9191F2",
      500: "#6B4DE0",
      dark: "#4D1C8C",
    },

    secondary: {
      light: "#F9F5FA",
      100: "#EBDAF2",
      A400: "#C898D9",
      500: "#C898D9",
      dark: "#9E62B2",
    },

    success: {
      main: "#4D8066",
    },
  },

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),

    h1: {
      fontSize: "24px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "28px",
    },

    h2: {
      fontSize: "24px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "28px",
    },

    subtitle1: {
      fontSize: "20px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    subtitle2: {
      fontSize: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    body1: {
      fontSize: "18px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    body2: {
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    caption: {
      fontSize: "14px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "20px",
    },
    caption1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "20px",
    },
    caption2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "12px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "18px",
    },
    caption3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "12px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "18px",
    },
    caption4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "14px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "18px",
      textAlign: "left",
    },
    caption5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
      textAlign: "left",
    },

    button: {
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "20px",
      fontFamily: "Inter",
    },

    overline: {
      fontSize: "14px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "20px",
      fontFamily: "Inter",
    },
    overline2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "18px",
      fontStyle: "normal",
    },
  },
});

export default theme;
