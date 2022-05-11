import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Links } from "./fixtures";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

// @ts-ignore
const Social: React.FC = () => {
  return Links.map(({ link, bg, boxShadow, name, user }) => (
    <Grid
      key={name}
      container
      component="a"
      href={link}
      sx={{ alignItems: "center", textDecoration: "none" }}
      target="_blank"
      mb={2}
    >
      <Grid item xs={2} sm={1} lg={2}>
        <Box
          sx={{
            width: 36,
            height: 36,
            background: bg,
            boxShadow,
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {name === "Linkedin" ? (
            <LinkedInIcon
              sx={{
                color: "primary.contrastText",
                width: 24,
                height: 24,
              }}
            />
          ) : name === "Github" ? (
            <GitHubIcon
              sx={{
                color: "primary.contrastText",
                width: 24,
                height: 24,
              }}
            />
          ) : (
            <InstagramIcon
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
          {name}
        </Typography>
        <Typography sx={{ color: "primary.contrastText", lineHeight: 1.29 }}>
          {user}
        </Typography>
      </Grid>
    </Grid>
  ));
};

export default Social;
