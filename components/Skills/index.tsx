import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Box from "../Box";
import Session from "../Session";
import Title from "../Session/Title";
import { SkillsContent } from "../../utils/translation/skills";
import { useRouter } from "next/router";

const Skills: React.FC = () => {
  const { locale } = useRouter();
  const { skills } = SkillsContent[locale];

  return (
    <Session content="none">
      <Title title={skills} />
      <Grid container spacing={1} mt={2}>
        <Grid item xs={6}>
          <Box borderRadius="8px 0px 0px 0px">
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              React JS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box borderRadius="0px 8px 0px 0px">
            <ul>
              <li>Emotion</li>
              <li>Styled Components</li>
              <li>Material UI</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              Typescript
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: "secondary.dark",
                mx: [2, 6],
              }}
            />
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              Next JS
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: "secondary.dark",
                mx: [2, 6],
              }}
            />
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              Gastsby
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={7} sm={8}>
          <Box borderRadius="0px 0px 0px 8px">
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              HTML
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: "secondary.dark",
                mx: [2, 6],
              }}
            />
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              CSS
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: "secondary.dark",
                mx: [2, 6],
              }}
            />
            <Typography
              sx={{
                fontSize: ["0.85rem", "1.2rem"],
                color: "secondary.main",
                m: 0,
              }}
            >
              JS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} sm={4}>
          <Box borderRadius="0px 0px 8px 0px">
            <ul>
              <li>React Native</li>
              <li>Wordpress</li>
              <li>Git</li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Session>
  );
};

export default Skills;
