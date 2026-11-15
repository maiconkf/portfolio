/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { colors, fonts } from "../../utils/theme";
import { Eyebrow } from "../../components/Section";
import SpotlightCard from "../../components/SpotlightCard";

export default function BlogIndex() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        color: colors.text,
      }}
    >
      <Head>
        <title>Blog | Maicon Furtado</title>
        <meta
          name="description"
          content="Artigos e relatos de viagem por Maicon Furtado."
        />
      </Head>

      <Box
        component="header"
        sx={{
          borderBottom: `1px solid ${colors.border}`,
          backgroundColor: "rgba(7, 7, 13, 0.78)",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" passHref>
            <Typography
              component="a"
              sx={{
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: "1.375rem",
                letterSpacing: "-0.04em",
                color: colors.text,
                textDecoration: "none",
              }}
            >
              maicon
              <Box component="span" sx={{ color: colors.violet }}>
                .
              </Box>
            </Typography>
          </Link>
          <Link href="/" passHref>
            <Typography
              component="a"
              sx={{
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: colors.muted,
                textDecoration: "none",
                "&:hover": { color: colors.text },
              }}
            >
              ← Início
            </Typography>
          </Link>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Eyebrow>Blog</Eyebrow>
        <Typography
          variant="h1"
          sx={{
            mt: 2,
            mb: 5,
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Publicações
        </Typography>

        <Link href="/blog/patagonia" passHref>
          <SpotlightCard
            component="a"
            sx={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
              "&:hover": {
                borderColor: colors.borderStrong,
                transform: "translateY(-3px)",
              },
            }}
          >
            <Box sx={{ height: { xs: 200, sm: 280 }, overflow: "hidden" }}>
              <img
                src="/img/blog/Fitz-Roy.JPG"
                alt="Patagônia - Dezembro de 2018"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box sx={{ p: { xs: 3, sm: 4 } }}>
              <Typography
                sx={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: colors.violet,
                }}
              >
                Dezembro de 2018 · Viagem
              </Typography>
              <Typography
                component="h2"
                sx={{
                  mt: 1,
                  fontFamily: fonts.display,
                  fontWeight: 800,
                  fontSize: { xs: "1.75rem", sm: "2.25rem" },
                  letterSpacing: "-0.03em",
                  color: colors.text,
                }}
              >
                Patagônia — Roteiro de 12 dias
              </Typography>
              <Typography
                sx={{
                  mt: 1.5,
                  color: colors.muted,
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                }}
              >
                Roteiro completo de 12 dias de viagem para a Patagônia Chilena e
                Argentina, com dicas práticas, trilhas e planilha de gastos.
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  fontWeight: 600,
                  color: colors.text,
                }}
              >
                Ler relato completo
                <NorthEastRoundedIcon fontSize="small" />
              </Box>
            </Box>
          </SpotlightCard>
        </Link>
      </Container>
    </Box>
  );
}
