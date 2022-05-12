/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { AsideContent } from "../../utils/translation/aside";
import Link from "next/link";
import Social from "./Social";
import BasicData from "./BasicData";

const Aside: React.FC = () => {
  const { locale, asPath } = useRouter();
  const {
    languages,
    portuguese,
    english,
    native,
    advanced,
    brazil,
    gran_britain,
  } = AsideContent[locale];

  return (
    <Box
      component="aside"
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: "100%",
      }}
      p={[2, 2, 2, 3]}
    >
      <picture>
        <source srcSet={`/img/maicon-furtado@2x.webp 2x, /img/maicon-furtado@3x.webp 3x`} type="image/webp" />
        <img
          src={`/img/maicon-furtado.jpg`}
          srcSet='/img/maicon-furtado@2x.jpg 2x, /img/maicon-furtado@3x.jpg 3x'
          width="82"
          height="82"
          alt="Maicon Furtado - Senior Front-end Developer"
          style={{ borderRadius: "100%" }}
          loading="lazy"
        />
      </picture>
      <Typography variant="h1" mt={1} mb={0.5}>
        Maicon Furtado
      </Typography>
      <Typography variant="h2" mb={2} color="secondary.light">
        Senior Front-end Engineer
      </Typography>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

      <Box sx={{ flexGrow: 1 }}>
        <BasicData />

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

        <Social />

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 2 }} />

        <Typography
          sx={{ fontSize: "0.8rem", color: "primary.light", lineHeight: 1.33 }}
          mb={0.25}
        >
          {languages}
        </Typography>
        <Link href={asPath} passHref locale="pt-BR">
          <Grid
            container
            sx={{
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
            mb={2}
          >
            <Grid item xs={2} sm={1} lg={2}>
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                width={36}
                height={36}
              >
                <img
                  src="/img/Flag_of_Brazil.svg"
                  alt={brazil}
                  style={{ borderRadius: "2px" }}
                  width={36}
                  height={25}
                />
              </Box>
            </Grid>
            <Grid item xs={10} sm={11} lg={10}>
              <Typography
                sx={{ color: "primary.contrastText", lineHeight: 1.29 }}
              >
                {portuguese}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "primary.light",
                  lineHeight: 1.33,
                }}
                mb={0.25}
              >
                {native}
              </Typography>
            </Grid>
          </Grid>
        </Link>
        <Link href={asPath} passHref locale="en">
          <Grid
            container
            sx={{
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
            mb={2}
          >
            <Grid item xs={2} sm={1} lg={2}>
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                width={36}
                height={36}
              >
                <img
                  src="/img/Flag_of_Grain_Britain.svg"
                  alt={gran_britain}
                  style={{ borderRadius: "2px" }}
                  width={36}
                  height={27}
                />
              </Box>
            </Grid>
            <Grid item xs={10} sm={11} lg={10}>
              <Typography
                sx={{ color: "primary.contrastText", lineHeight: 1.29 }}
              >
                {english}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "primary.light",
                  lineHeight: 1.33,
                }}
                mb={0.25}
              >
                {advanced}
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Box>
    </Box>
  );
};

export default Aside;
