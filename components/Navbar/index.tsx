import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getContent } from "../../utils/translation/content";
import { colors, fonts } from "../../utils/theme";

const Navbar: React.FC = () => {
  const { locale, asPath } = useRouter();
  const { nav } = getContent(locale);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projetos", label: nav.projects },
    { href: "#experiencia", label: nav.experience },
    { href: "#skills", label: nav.skills },
    { href: "#contato", label: nav.contact },
  ];

  const langs = [
    { code: "pt-BR", label: "PT" },
    { code: "en", label: "EN" },
  ];

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all .3s ease",
        backdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
        backgroundColor: scrolled ? "rgba(7, 7, 13, 0.72)" : "transparent",
        borderBottom: `1px solid ${scrolled ? colors.border : "transparent"}`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="a"
          href="#top"
          aria-label="Maicon Furtado"
          sx={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: "1.375rem",
            letterSpacing: "-0.04em",
            color: colors.text,
            textDecoration: "none",
          }}
        >
          maicon
          <Box component="span" sx={{ color: colors.violet }}>
            .
          </Box>
        </Typography>

        <Stack
          component="nav"
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {links.map(({ href, label }) => (
            <Typography
              key={href}
              component="a"
              href={href}
              sx={{
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: colors.muted,
                textDecoration: "none",
                transition: "color .2s",
                "&:hover": { color: colors.text },
              }}
            >
              {label}
            </Typography>
          ))}
        </Stack>

        <Stack
          direction="row"
          sx={{
            p: 0.5,
            borderRadius: 999,
            border: `1px solid ${colors.border}`,
            backgroundColor: "rgba(255,255,255,0.03)",
          }}
        >
          {langs.map(({ code, label }) => {
            const active = locale === code;
            return (
              <Link key={code} href={asPath} locale={code} passHref scroll={false}>
                <Box
                  component="a"
                  aria-current={active ? "true" : undefined}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 999,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: active ? colors.bg : colors.muted,
                    backgroundColor: active ? colors.text : "transparent",
                    transition: "all .2s",
                    "&:hover": { color: active ? colors.bg : colors.text },
                  }}
                >
                  {label}
                </Box>
              </Link>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
