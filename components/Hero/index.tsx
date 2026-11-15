/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useRouter } from "next/router";
import React from "react";
import { contact, getContent } from "../../utils/translation/content";
import { colors, fonts } from "../../utils/theme";
import Button from "../Button";
import SocialLinks from "../SocialLinks";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const Hero: React.FC = () => {
  const { locale } = useRouter();
  const { hero } = getContent(locale);

  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 16, md: 12 },
        pb: { xs: 10, md: 8 },
      }}
    >
      {/* background: grid + glowing blobs */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 360, md: 560 },
          height: { xs: 360, md: 560 },
          top: { xs: -120, md: -160 },
          left: { xs: -160, md: "8%" },
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.35)",
          filter: "blur(120px)",
          animation: "float 14s ease-in-out infinite",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 300, md: 480 },
          height: { xs: 300, md: 480 },
          bottom: { xs: -100, md: -120 },
          right: { xs: -140, md: "6%" },
          borderRadius: "50%",
          background: "rgba(56, 189, 248, 0.22)",
          filter: "blur(120px)",
          animation: "float 18s ease-in-out infinite reverse",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box
              className="fade-up"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                px: 2,
                py: 1,
                mb: 4,
                borderRadius: 999,
                border: `1px solid ${colors.border}`,
                backgroundColor: "rgba(255,255,255,0.04)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: colors.muted,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: colors.blue,
                  animation: "pulse 2s infinite",
                }}
              />
              {hero.badge}
            </Box>

            <Typography
              className="fade-up"
              style={delay(80)}
              sx={{ fontSize: { xs: "1.125rem", md: "1.375rem" }, color: colors.muted, mb: 1.5 }}
            >
              {hero.greeting} 👋
            </Typography>

            <Typography
              variant="h1"
              className="fade-up"
              style={delay(160)}
              sx={{
                fontFamily: fonts.display,
                fontSize: "clamp(2.75rem, 7.2vw, 5.75rem)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
              }}
            >
              {hero.titleStart}{" "}
              <Box
                component="span"
                sx={{
                  background: colors.gradient,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "gradientShift 6s linear infinite",
                }}
              >
                {hero.titleHighlight}
              </Box>{" "}
              {hero.titleEnd}
            </Typography>

            <Typography
              className="fade-up"
              style={delay(260)}
              sx={{
                mt: 3.5,
                maxWidth: 600,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                lineHeight: 1.7,
                color: colors.muted,
              }}
            >
              {hero.description}
            </Typography>

            <Box
              className="fade-up"
              style={delay(360)}
              sx={{ mt: 5, display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}
            >
              <Button href={`mailto:${contact.email}`}>
                {hero.ctaPrimary}
                <ArrowForwardRoundedIcon fontSize="small" />
              </Button>
              <Button href="#projetos" variant="ghost">
                {hero.ctaSecondary}
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            className="fade-up"
            style={delay(300)}
            sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}
          >
            <Box sx={{ position: "relative", width: { xs: 160, md: 280 } }}>
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: { xs: "36px", md: "48px" },
                  background: colors.gradient,
                  backgroundSize: "200% auto",
                  animation: "gradientShift 6s linear infinite",
                  filter: "blur(0.5px)",
                }}
              />
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: { xs: "32px", md: "44px" },
                  background: colors.gradient,
                  filter: "blur(40px)",
                  opacity: 0.5,
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  borderRadius: { xs: "32px", md: "44px" },
                  overflow: "hidden",
                  aspectRatio: "1 / 1",
                  backgroundColor: colors.surface,
                  "& img": { width: "100%", height: "100%", objectFit: "cover" },
                }}
              >
                <picture>
                  <source
                    srcSet="/img/maicon-furtado@3x.webp"
                    type="image/webp"
                  />
                  <img
                    src="/img/maicon-furtado@3x.jpg"
                    width={300}
                    height={300}
                    alt="Maicon Furtado - Senior Front-end Engineer"
                  />
                </picture>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* stats */}
        <Box
          className="fade-up"
          style={delay(480)}
          sx={{
            mt: { xs: 8, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            borderRadius: "24px",
            border: `1px solid ${colors.border}`,
            backgroundColor: "rgba(15, 15, 26, 0.6)",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
          }}
        >
          {hero.stats.map(({ value, label }, i) => (
            <Box
              key={label}
              sx={{
                p: { xs: 3, md: 4 },
                borderTop: { xs: i ? `1px solid ${colors.border}` : "none", sm: "none" },
                borderLeft: { sm: i ? `1px solid ${colors.border}` : "none" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: colors.text,
                }}
              >
                {value}
              </Typography>
              <Typography sx={{ mt: 0.5, color: colors.muted, fontSize: "0.9375rem" }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box className="fade-up" style={delay(560)} sx={{ mt: 4 }}>
          <SocialLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
