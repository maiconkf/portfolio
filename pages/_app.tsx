import { ThemeProvider, CssBaseline } from "@mui/material";
import SEO from "../components/SEO";
import "../utils/style.css";
import { theme } from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
