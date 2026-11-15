import { Box, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import { contact } from "../../utils/translation/content";
import { colors } from "../../utils/theme";

const items = [
  { href: contact.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: contact.github, label: "GitHub", Icon: GitHubIcon },
  { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: `mailto:${contact.email}`, label: "E-mail", Icon: EmailOutlinedIcon },
];

const SocialLinks: React.FC<{ justify?: string }> = ({ justify = "flex-start" }) => (
  <Stack direction="row" spacing={1.5} sx={{ justifyContent: justify }}>
    {items.map(({ href, label, Icon }) => (
      <Box
        key={label}
        component="a"
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        sx={{
          width: 48,
          height: 48,
          display: "grid",
          placeItems: "center",
          borderRadius: "14px",
          color: colors.muted,
          border: `1px solid ${colors.border}`,
          backgroundColor: "rgba(255,255,255,0.03)",
          transition: "all .25s ease",
          "&:hover": {
            color: colors.text,
            borderColor: colors.borderStrong,
            backgroundColor: "rgba(255,255,255,0.08)",
            transform: "translateY(-3px)",
          },
        }}
      >
        <Icon sx={{ fontSize: 22 }} />
      </Box>
    ))}
  </Stack>
);

export default SocialLinks;
