/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import { useLocale } from "../../utils/locale";
import React from "react";
import { getContent } from "../../utils/translation/content";
import { colors, fonts } from "../../utils/theme";
import Reveal from "../Reveal";
import Section, { Eyebrow } from "../Section";
import SpotlightCard from "../SpotlightCard";

const groupColors = [colors.violet, colors.blue, colors.pink];

const Skills: React.FC = () => {
  const locale = useLocale();
  const { skills, education } = getContent(locale);

  return (
    <Section id="skills" eyebrow={skills.eyebrow} title={skills.title}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 2.5,
        }}
      >
        {skills.groups.map(({ name, items }, idx) => (
          <Reveal key={name} delay={idx * 80} sx={{ height: "100%" }}>
            <SpotlightCard sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
              <Typography
                component="h3"
                sx={{
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: groupColors[idx],
                  mb: 2.5,
                }}
              >
                {name}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {items.map((item) => (
                  <Box
                    key={item}
                    component="span"
                    sx={{
                      px: 1.75,
                      py: 0.875,
                      borderRadius: "12px",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                      backgroundColor: "rgba(255,255,255,0.04)",
                      transition: "all .2s ease",
                      "&:hover": {
                        borderColor: groupColors[idx],
                        backgroundColor: "rgba(255,255,255,0.08)",
                      },
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </SpotlightCard>
          </Reveal>
        ))}
      </Box>

      <Reveal sx={{ mt: { xs: 8, md: 10 }, mb: 3 }}>
        <Eyebrow>{education.eyebrow}</Eyebrow>
      </Reveal>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 2.5,
        }}
      >
        {education.items.map(({ date, institution, img, course }, idx) => (
          <Reveal key={institution} delay={idx * 80}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2.5,
                borderRadius: "20px",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.surface,
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  overflow: "hidden",
                  "& img": { width: "100%", height: "100%", objectFit: "cover" },
                }}
              >
                <picture>
                  <source
                    srcSet={`/img/${img}.webp 1x, /img/${img}@2x.webp 2x, /img/${img}@3x.webp 3x`}
                    type="image/webp"
                  />
                  <img
                    src={`/img/${img}.jpg`}
                    width={48}
                    height={48}
                    alt={institution}
                    loading="lazy"
                  />
                </picture>
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontWeight: 600, color: colors.text, lineHeight: 1.35 }}>
                  {course}
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", color: colors.subtle }}>
                  {institution} · {date}
                </Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
};

export default Skills;
