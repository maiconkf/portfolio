/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { ExperiencesContent } from "../../utils/translation/experiences";
import Session from "../Session";
import Title from "../Session/Title";
import sanitizeHtml from "sanitize-html-react";

const Experiences: React.FC = () => {
  const { locale } = useRouter();
  const { latest_experiences, companies } = ExperiencesContent[locale];

  return (
    <Session>
      <Title title={latest_experiences} />
      <Box>
        {companies.map(({ date, company, img, role, about }, idx) => (
          <Grid key={idx} container spacing={2} mt={0} alignItems="center">
            <Grid item sm={4} lg={5} xl={4}>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: 1.1,
                  letterSpacing: "0.01em",
                  color: "primary.light",
                  position: "relative",

                  "&:before": {
                    content: '""',
                    position: "absolute",
                    left: -12,
                    top: 4,
                    width: 4,
                    height: 4,
                    backgroundColor: "primary.light",
                    borderRadius: "100%",
                  },
                }}
                mb={0.5}
              >
                {date}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    left: -10,
                    top: 0,
                    width: "1px",
                    height: "calc(100% + 8px)",
                    backgroundColor: "secondary.dark",
                    display: idx + 1 < companies.length ? "block" : "none",
                  },
                }}
                pt={0.5}
                pb={1}
              >
                <Box
                  sx={{
                    filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05))",
                    borderRadius: "5px",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <picture>
                    <source srcSet={`/img/${img}@2x.webp 2x, /img/${img}@3x.webp 3x`} type="image/webp" />
                    <img
                      src={`/img/${img}.jpg`}
                      srcSet={`/img/${img}@2x.jpg 2x, /img/${img}@3x.jpg 3x`}
                      width="40"
                      height="40"
                      alt={company}
                      loading="lazy"
                    />
                  </picture>
                </Box>
                <Box pl={2}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.1,
                      color: "primary.light",
                    }}
                    mb={0.5}
                  >
                    {company}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      lineHeight: 1.29,
                      fontWeight: 500,
                      color: "primary.contrastText",
                    }}
                  >
                    {role}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              sm={8}
              lg={7}
              xl={8}
            >
              <Typography
                sx={{
                  color: "primary.light",
                  fontSize: 14,
                  lineHeight: 1.29,

                  position: "relative",
                  "&:before": {
                    content: ['""', "none"],
                    position: "absolute",
                    left: -10,
                    top: -8,
                    width: "1px",
                    height: "calc(100% + 16px)",
                    backgroundColor: "secondary.dark",
                    display: idx + 1 < companies.length ? "block" : "none",
                  },
                  "& a": { color: "secondary.main", textDecoration: "none" },
                  "& br": { display: ['none', 'none', 'none', 'none', 'block'] }
                }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(about),
                }}
              ></Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Session >
  );
};

export default Experiences;
