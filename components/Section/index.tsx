import { Box, Container, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { colors } from "../../utils/theme";
import Reveal from "../Reveal";

type Props = {
  id?: string;
  eyebrow: string;
  title?: string;
  children: ReactNode;
};

export const Eyebrow: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Typography
    component="span"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1.25,
      fontSize: "0.8125rem",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: colors.violet,
      "&::before": {
        content: '""',
        width: 24,
        height: 2,
        borderRadius: 2,
        background: colors.gradient,
      },
    }}
  >
    {children}
  </Typography>
);

const Section: React.FC<Props> = ({ id, eyebrow, title, children }) => (
  <Box component="section" id={id} sx={{ py: { xs: 10, md: 14 } }}>
    <Container maxWidth="lg">
      <Reveal sx={{ mb: { xs: 5, md: 7 } }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        {title && (
          <Typography variant="h2" sx={{ mt: 2, maxWidth: 720 }}>
            {title}
          </Typography>
        )}
      </Reveal>
      {children}
    </Container>
  </Box>
);

export default Section;
