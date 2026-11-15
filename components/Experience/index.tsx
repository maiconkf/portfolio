/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import { useLocale } from "../../utils/locale";
import React from "react";
import sanitizeHtml from "sanitize-html-react";
import { getContent } from "../../utils/translation/content";
import { colors, fonts } from "../../utils/theme";
import Reveal from "../Reveal";
import Section from "../Section";
import SpotlightCard from "../SpotlightCard";

const sanitize = (html: string) =>
  sanitizeHtml(html, {
    allowedTags: ["a", "br", "strong", "em"],
    allowedAttributes: { a: ["href", "target", "rel"] },
  });

const Experience: React.FC = () => {
  const locale = useLocale();
  const { experience } = getContent(locale);

  return (
    <Section id="experiencia" eyebrow={experience.eyebrow} title={experience.title}>
      <Box sx={{ display: "grid", gap: 2.5 }}>
        {experience.items.map(({ date, company, img, role, about }, idx) => (
          <Reveal key={company} delay={idx * 80}>
            <SpotlightCard
              sx={{
                p: { xs: 3, md: 4.5 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "280px 1fr" },
                gap: { xs: 2.5, md: 6 },
                "&:hover": { borderColor: colors.borderStrong },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 56,
                    height: 56,
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: `1px solid ${colors.border}`,
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
                      srcSet={`/img/${img}@2x.jpg 2x, /img/${img}@3x.jpg 3x`}
                      width={56}
                      height={56}
                      alt={company}
                      loading="lazy"
                    />
                  </picture>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontWeight: 700,
                      fontSize: "1.375rem",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: colors.text,
                    }}
                  >
                    {company}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: colors.subtle, mt: 0.25 }}>
                    {date}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: colors.violet,
                    mb: 1,
                  }}
                >
                  {role}
                </Typography>
                <Typography
                  sx={{
                    color: colors.muted,
                    fontSize: { xs: "1.0625rem", md: "1.125rem" },
                    lineHeight: 1.75,
                    "& a": {
                      color: colors.text,
                      fontWeight: 500,
                      textDecoration: "none",
                      backgroundImage: colors.gradient,
                      backgroundSize: "100% 1px",
                      backgroundPosition: "0 100%",
                      backgroundRepeat: "no-repeat",
                      transition: "background-size .25s ease",
                      "&:hover": { backgroundSize: "100% 100%", color: colors.bg },
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: sanitize(about) }}
                />
              </Box>
            </SpotlightCard>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
};

export default Experience;
