/* eslint-disable @next/next/no-img-element */
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Social from "./Social";
import BasicData from "./BasicData";
import Languages from "./Languages";

const Aside: React.FC = () => {
  const matches = useMediaQuery("(max-height: 650px) and (min-width: 1200px)");

  return (
    <Box
      component="aside"
      sx={{
        backgroundColor: "primary.main",
        height: ["auto", "auto", "auto", "100vh"],
        width: "100%",
        position: ["static", "static", "static", "sticky"],
        overflow: matches ? "auto" : "unset",
        top: 0,
      }}
      p={[2, 2, 2, 3]}
    >
      <picture>
        <source
          srcSet={`/img/maicon-furtado@2x.webp 2x, /img/maicon-furtado@3x.webp 3x`}
          type="image/webp"
        />
        <img
          src={`/img/maicon-furtado.jpg`}
          srcSet="/img/maicon-furtado@2x.jpg 2x, /img/maicon-furtado@3x.jpg 3x"
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

        <Languages />
      </Box>
    </Box>
  );
};

export default Aside;
