import { ThemeProvider, CssBaseline } from "@mui/material";
import Script from "next/script";
import SEO from "../components/SEO";
import "../utils/style.css";
import { theme } from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-45158993-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-45158993-1');
        `}
      </Script>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
