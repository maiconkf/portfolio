import { Box, BoxProps } from "@mui/material";
import React from "react";
import { colors } from "../../utils/theme";

type Props = BoxProps<"a"> & { variant?: "primary" | "ghost" };

const Button: React.FC<Props> = ({ variant = "primary", children, sx, ...rest }) => (
  <Box
    component="a"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      height: 56,
      px: 3.5,
      borderRadius: 999,
      fontSize: "1rem",
      fontWeight: 600,
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "transform .25s ease, box-shadow .25s ease, background .25s ease",
      "& svg": { transition: "transform .25s ease" },
      "&:hover svg": { transform: "translateX(4px)" },
      ...(variant === "primary"
        ? {
            color: colors.bg,
            backgroundColor: colors.text,
            boxShadow: "0 10px 40px -10px rgba(167, 139, 250, 0.6)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 16px 50px -10px rgba(167, 139, 250, 0.8)",
            },
          }
        : {
            color: colors.text,
            border: `1px solid ${colors.borderStrong}`,
            backgroundColor: "rgba(255,255,255,0.03)",
            "&:hover": {
              transform: "translateY(-2px)",
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }),
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Box>
);

export default Button;
