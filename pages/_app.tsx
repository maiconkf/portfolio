import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import '../utils/style.css'

const theme = createTheme({
  palette: {
    primary: {
      light: "#ACB1C3",
      main: "#2E2E48",
      dark: "#232339",
      contrastText: "#E2E6EE",
    },
    secondary: {
      light: "#C696FC",
      main: "#95AAFB",
      dark: "#2E2E48",
    },
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
    h1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#E2E6EE",
      letterSpacing: "-0.02em",

      "@media (min-width: 1200px)": {
        fontSize: "2rem",
      },
    },

    h2: {
      fontSize: "1.2rem",
      fontWeight: 500,
      letterSpacing: "0.01em",

      "@media (min-width: 1200px)": {
        fontSize: "1.4rem",
      },
    },

    h3: {
      fontSize: "1.4rem",
      lineHeight: "1.33",
      fontWeight: 500,
      letterSpacing: "0.01em",
      position: "relative",
      color: "#E2E6EE",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
