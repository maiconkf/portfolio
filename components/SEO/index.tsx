import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { SEOContent } from "../../utils/translation/seo";

const SEO: React.FC = () => {
  const { locale } = useRouter();

  const { description } = SEOContent[locale];

  return (
    <Head>
      <title>Maicon Furtado - Senior Front-end Engineer</title>
      <meta name="description" content={description} />
      <meta property="og:url" content="https://www.maiconfurtado.com.br" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Maicon Furtado - Senior Front-end Engineer"
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.maiconfurtado.com.br/share.jpg"
      />
      <meta
        property="og:image:alt"
        content="Maicon Furtado - Imagem de compartilhamento"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Maicon Furtado" />
      {locale === "en" ? (
        <>
          <link
            rel="alternate"
            href="https://www.maiconfurtado.com.br"
            hrefLang="pt-br"
          />
          <meta property="og:locale:alternate" content="pt-br" />
        </>
      ) : (
        <>
          <link
            rel="alternate"
            href="https://www.maiconfurtado.com.br/en"
            hrefLang="en"
          />
          <meta property="og:locale:alternate" content="en" />
        </>
      )}
      <meta name="theme-color" content="#2E2E48" />
    </Head>
  );
};

export default SEO;
