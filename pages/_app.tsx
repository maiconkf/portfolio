import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E2E48",
      dark: "#232339",
    },
    secondary: {
      light: "#C696FC",
      main: "#95AAFB",
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
        fontSize: "1.5rem",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
