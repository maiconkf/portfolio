import { Box, Container, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useLocale } from "../../utils/locale";
import React from "react";
import { contact, getContent } from "../../utils/translation/content";
import { colors, fonts } from "../../utils/theme";
import Button from "../Button";
import Reveal from "../Reveal";
import { Eyebrow } from "../Section";
import SocialLinks from "../SocialLinks";

const Contact: React.FC = () => {
  const locale = useLocale();
  const { contact: t } = getContent(locale);

  return (
    <Box component="section" id="contato" sx={{ pt: { xs: 6, md: 10 }, pb: 6 }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              px: { xs: 3, md: 8 },
              py: { xs: 8, md: 12 },
              borderRadius: { xs: "28px", md: "40px" },
              border: `1px solid ${colors.border}`,
              background:
                "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(139, 92, 246, 0.35), transparent 70%), radial-gradient(ellipse 50% 60% at 100% 100%, rgba(56, 189, 248, 0.18), transparent 70%), #0B0B15",
            }}
          >
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Typography
              component="h2"
              sx={{
                mt: 3,
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                letterSpacing: "-0.045em",
                lineHeight: 1.05,
                color: colors.text,
              }}
            >
              {t.title}
              <br />
              <Box
                component="span"
                sx={{
                  background: colors.gradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {t.highlight}
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 3,
                mx: "auto",
                maxWidth: 520,
                fontSize: { xs: "1.0625rem", md: "1.25rem" },
                color: colors.muted,
              }}
            >
              {t.description}
            </Typography>

            <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
              <Button href={`mailto:${contact.email}`} sx={{ height: 64, px: 4.5, fontSize: "1.0625rem" }}>
                {t.cta}
                <ArrowForwardRoundedIcon fontSize="small" />
              </Button>
            </Box>
            <Typography sx={{ mt: 2, color: colors.subtle, fontSize: "0.9375rem" }}>
              {contact.email}
            </Typography>
            <Box sx={{ mt: 5 }}>
              <SocialLinks justify="center" />
            </Box>
          </Box>
        </Reveal>

        <Box
          component="footer"
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
            justifyContent: "space-between",
            alignItems: "center",
            color: colors.subtle,
            fontSize: "0.875rem",
          }}
        >
          <span>© {new Date().getFullYear()} Maicon Furtado</span>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
