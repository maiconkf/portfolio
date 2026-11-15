import { Box, BoxProps } from "@mui/material";
import React, { useRef } from "react";
import { colors } from "../../utils/theme";

type Props = BoxProps & {
  glow?: string;
  href?: string;
  target?: string;
  rel?: string;
};

/**
 * Card with a radial "spotlight" that follows the mouse cursor.
 */
const SpotlightCard: React.FC<Props> = ({
  glow = "rgba(167, 139, 250, 0.18)",
  children,
  sx,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Box
      ref={ref}
      onMouseMove={handleMove}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        border: `1px solid ${colors.border}`,
        background: colors.surface,
        transition: "border-color .3s ease, transform .3s ease",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity .3s ease",
          background: `radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), ${glow}, transparent 45%)`,
          zIndex: 0,
        },
        "&:hover": { borderColor: colors.borderStrong },
        "&:hover::before": { opacity: 1 },
        "& > *": { position: "relative", zIndex: 1 },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SpotlightCard;
