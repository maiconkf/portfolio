import { createTheme } from "@mui/material";

export const colors = {
  bg: "#07070D",
  surface: "#0F0F1A",
  surfaceHover: "#151524",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",
  text: "#F5F5FA",
  muted: "#A3A3B8",
  subtle: "#6E6E85",
  violet: "#A78BFA",
  blue: "#7DD3FC",
  pink: "#F0ABFC",
  gradient: "linear-gradient(120deg, #A78BFA 0%, #7DD3FC 50%, #F0ABFC 100%)",
};

export const fonts = {
  display: ["Outfit", "Inter", "sans-serif"].join(","),
  body: ["Inter", "system-ui", "-apple-system", "sans-serif"].join(","),
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: colors.bg, paper: colors.surface },
    text: { primary: colors.text, secondary: colors.muted },
    primary: {
      light: colors.muted,
      main: colors.surface,
      dark: colors.bg,
      contrastText: colors.text,
    },
    secondary: {
      light: colors.violet,
      main: colors.blue,
      dark: colors.border,
    },
  },
  typography: {
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.display,
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.03em",
      color: colors.text,
    },
    h2: {
      fontFamily: fonts.display,
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
      color: colors.text,
      "@media (min-width: 900px)": { fontSize: "3rem" },
    },
    h3: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.25,
      color: colors.text,
    },
    body1: { fontSize: "1.0625rem", lineHeight: 1.7 },
  },
  shape: { borderRadius: 16 },
});
