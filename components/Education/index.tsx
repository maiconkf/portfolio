/* eslint-disable @next/next/no-img-element */
import { Box as MuiBox, Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Session from "../Session";
import Title from "../Session/Title";
import { EducationContent } from "../../utils/translation/education";
import Box from "../Box";

const Education: React.FC = () => {
  const { locale } = useRouter();
  const { education, instituitions } = EducationContent[locale];

  return (
    <Session>
      <Title title={education} />
      <Grid container spacing={1} mt={2}>
        {instituitions.map(({ date, instituition, img, course }, idx) => (
          <Grid key={idx} item xs={12} sm={4}>
            <Box
              borderRadius={
                idx === 0 ? ["8px 8px 0px 0px", "8px 0px 0px 8px"] : idx === 1 ? ["0"] : ["0px 0px 8px 8px", "0 8px 8px 0"]
              }
              flexDirection="column"
              alignItems="flex-start"
              height={150}
            >
              <MuiBox sx={{ display: "flex", alignItems: "center" }}>
                <picture>
                  <source srcSet={`/img/${img}@2x.webp 2x, /img/${img}@3x.webp 3x`} type="image/webp" />
                  <img
                    src={`/img/${img}.jpg`}
                    srcSet={`/img/${img}@2x.jpg 2x, /img/${img}@3x.jpg 3x`}
                    width="48"
                    height="48"
                    alt={instituition}
                    style={{ borderRadius: "8px" }}
                    loading="lazy"
                  />
                </picture>
                <Typography sx={{ color: 'primary.contrastText', fontWeight: 500 }} ml={2}>{instituition}</Typography>
              </MuiBox>
              <Typography sx={{ color: 'primary.contrastText', fontWeight: 500, lineHeight: 1.29 }} mt={1}>{course}</Typography>
              <Typography sx={{ color: 'primary.light', fontSize: 12, fontWeight: 500 }} mt={0.15}>{date}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Session>
  );
};

export default Education;
