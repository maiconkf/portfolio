import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { AsideContent } from "../../../utils/translation/aside";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Content } from "./fixtures";

// @ts-ignore
const BasicData: React.FC = () => {
  const { locale } = useRouter();
  const { address, addressCity } = AsideContent[locale];

  return Content.map(({ link, title, subtitle, icon }) => (
    <Grid
      container
      component="a"
      href={link}
      sx={{ alignItems: "center", textDecoration: "none" }}
      mb={2}
      key={icon}
    >
      <Grid item xs={2} sm={1} lg={2}>
        <Box
          sx={{
            width: 36,
            height: 36,
            backgroundColor: "primary.dark",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title ? (
            <EmailOutlinedIcon
              sx={{
                color: "primary.contrastText",
                width: 24,
                height: 24,
              }}
            />
          ) : (
            <LocationOnIcon
              sx={{
                color: "primary.contrastText",
                width: 24,
                height: 24,
              }}
            />
          )}
        </Box>
      </Grid>
      <Grid item xs={10} sm={11} lg={10}>
        <Typography
          sx={{ fontSize: "0.8rem", color: "primary.light", lineHeight: 1.33 }}
          mb={0.25}
        >
          {title || address}
        </Typography>
        <Typography sx={{ color: "primary.contrastText", fontSize: '0.9rem', lineHeight: 1.29 }}>
          {subtitle || addressCity}
        </Typography>
      </Grid>
    </Grid>
  ));
};

export default BasicData;
