/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { AsideContent } from "../../../utils/translation/aside";
import { useRouter } from "next/router";

const Languages: React.FC = () => {
  const { locale, asPath } = useRouter();
  const { languages, countries } = AsideContent[locale];

  return (
    <>
      <Typography
        sx={{ fontSize: "0.8rem", color: "primary.light", lineHeight: 1.33 }}
        mb={0.25}
      >
        {languages}
      </Typography>
      {countries.map(
        ({ language, level, country, img, country_locale }, idx) => (
          <Link key={idx} href={asPath} passHref locale={country_locale}>
            <a style={{ textDecoration: 'none' }}>
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
                      src={`/img/${img}.svg`}
                      alt={country}
                      style={{ borderRadius: "2px" }}
                      width={36}
                      height={25}
                    />
                  </Box>
                </Grid>
                <Grid item xs={10} sm={11} lg={10}>
                  <Typography
                    sx={{
                      color: "primary.contrastText",
                      fontSize: "0.9rem",
                      lineHeight: 1.29,
                    }}
                  >
                    {language}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "primary.light",
                      lineHeight: 1.33,
                    }}
                    mb={0.25}
                  >
                    {level}
                  </Typography>
                </Grid>
              </Grid>
            </a>
          </Link>
        )
      )}
    </>
  );
};

export default Languages;
