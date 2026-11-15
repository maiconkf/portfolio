import { Box, Grid, Typography } from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { useRouter } from "next/router";
import React from "react";
import { getContent } from "../../utils/translation/content";
import { colors, fonts } from "../../utils/theme";
import Reveal from "../Reveal";
import Section from "../Section";
import SpotlightCard from "../SpotlightCard";
import {
  LeplatVisual,
  QuoryVisual,
  projectAccent,
  projectColor,
} from "./Visuals";

const Projects: React.FC = () => {
  const { locale } = useRouter();
  const { projects } = getContent(locale);
  const en = locale === "en";

  return (
    <Section id="projetos" eyebrow={projects.eyebrow} title={projects.title}>
      <Box sx={{ display: "grid", gap: { xs: 3, md: 4 } }}>
        {projects.items.map((project, idx) => {
          const reversed = idx % 2 === 1;
          const accent = projectColor[project.visual];
          return (
            <Reveal key={project.name}>
              <SpotlightCard
                className="project-card"
                glow={projectAccent[project.visual]}
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    borderColor: colors.borderStrong,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Grid container direction={reversed ? "row-reverse" : "row"}>
                  <Grid item xs={12} md={6}>
                    {project.visual === "quory" ? (
                      <QuoryVisual en={en} />
                    ) : (
                      <LeplatVisual en={en} />
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      p: { xs: 3.5, sm: 5, md: 6 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: accent,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")} — {project.tagline}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        mt: 1.5,
                        fontFamily: fonts.display,
                        fontWeight: 800,
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        color: colors.text,
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 2.5,
                        color: colors.muted,
                        fontSize: { xs: "1.0625rem", md: "1.125rem" },
                        lineHeight: 1.75,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}
                    >
                      {project.tags.map((tag) => (
                        <Box
                          key={tag}
                          component="span"
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 999,
                            fontSize: "0.8125rem",
                            fontWeight: 500,
                            color: colors.text,
                            border: `1px solid ${colors.border}`,
                            backgroundColor: "rgba(255,255,255,0.04)",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        mt: 4,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: colors.text,
                        "& .arrow": {
                          display: "grid",
                          placeItems: "center",
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          backgroundColor: accent,
                          color: colors.bg,
                          transition: "transform .3s ease",
                        },
                        ".project-card:hover & .arrow": {
                          transform: "translate(2px, -2px)",
                        },
                      }}
                    >
                      {projects.visit} {project.linkLabel}
                      <span className="arrow">
                        <NorthEastRoundedIcon fontSize="small" />
                      </span>
                    </Box>
                  </Grid>
                </Grid>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
};

export default Projects;
