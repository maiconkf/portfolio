/* eslint-disable @next/next/no-img-element */
import { Box as MuiBox, Grid, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Session from "../Session";
import Title from "../Session/Title";
import Box from "../Box";
import LinkIcon from "@mui/icons-material/Link";
import { ProjectsContent } from "../../utils/translation/projects";

const Projects: React.FC = () => {
  const { locale } = useRouter();
  const { projects, arrProjects } = ProjectsContent[locale];

  return (
    <Session>
      <Title title={projects} />
      <Grid container spacing={1} mt={2}>
        {arrProjects.map(({ project, description, link, img, width }, idx) => (
          <Grid key={idx} item xs={12} sm={4}>
            <Box
              borderRadius={
                idx === 0
                  ? ["8px 8px 0px 0px", "8px 0px 0px 8px"]
                  : idx === 1
                  ? ["0"]
                  : ["0px 0px 8px 8px", "0 8px 8px 0"]
              }
              flexDirection="column"
              alignItems="flex-start"
              height={230}
            >
              <picture>
                <source
                  srcSet={`/img/${img}@2x.webp 2x, /img/${img}@3x.webp 3x`}
                  type="image/webp"
                />
                <img
                  src={`/img/${img}.jpg`}
                  srcSet={`/img/${img}@2x.jpg 2x, /img/${img}@3x.jpg 3x`}
                  width={width}
                  height="86"
                  alt={project}
                  style={{ borderRadius: "8px" }}
                  loading="lazy"
                />
              </picture>
              <Typography
                sx={{
                  color: "primary.contrastText",
                  fontWeight: 500,
                  lineHeight: 1.29,
                }}
                mt={1}
              >
                {project}
              </Typography>
              <Typography
                sx={{ color: "primary.light", fontSize: 14, fontWeight: 500 }}
                mt={0.3}
              >
                {description}
              </Typography>
              <MuiBox
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
                mt={1}
              >
                <MuiBox
                  sx={{
                    backgroundColor: "secondary.main",
                    borderRadius: "100%",
                    display: "flex",
                  }}
                  p={0.5}
                  mr={1}
                >
                  <LinkIcon
                    sx={{
                      transform: "rotate(-45deg)",
                      color: "primary.contrastText",
                    }}
                    fontSize="small"
                  />
                </MuiBox>
                <Link
                  sx={{
                    color: "secondary.light",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  href={link}
                  target="_blank"
                >
                  {link}
                </Link>
              </MuiBox>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Session>
  );
};

export default Projects;
