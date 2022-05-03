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
      }}
      p={[2, 2, 2, 3]}
    >
      <Avatar
        src="https://scontent.fpet3-1.fna.fbcdn.net/v/t1.6435-9/68902702_10214676645095308_8695338020066295808_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF0FVDwtQerYdM5vU5P8y5FjBaQYHQjvuGMFpBgdCO-4Q8lCBR2wN1X9e7ftUKUdgU&_nc_ohc=b89PjI5TJrkAX84b7KZ&_nc_ht=scontent.fpet3-1.fna&oh=00_AT-HDvssOh7varqL_-H9Rj0i_6QMTsXK1Mj5AYmoX-S3ow&oe=628F2782"
        sx={{ width: 82, height: 82 }}
      />
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
          sx={{ fontSize: "0.8rem", color: "#ACB1C3", lineHeight: 1.33 }}
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
              <Typography sx={{ color: "#E2E6EE", lineHeight: 1.29 }}>
                {portuguese}
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem", color: "#ACB1C3", lineHeight: 1.33 }}
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
              <Typography sx={{ color: "#E2E6EE", lineHeight: 1.29 }}>
                {english}
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem", color: "#ACB1C3", lineHeight: 1.33 }}
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
