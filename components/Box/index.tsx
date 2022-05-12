import React, { ReactNode } from "react";
import { Box as MuiBox, Typography } from "@mui/material";

type Props = {
  borderRadius?: string[] | string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  height?: number;
  children: ReactNode;
};

const Box: React.FC<Props> = ({ borderRadius, flexDirection, justifyContent = 'center', alignItems = 'center', height = 100, children }) => {
  return (
    <MuiBox
      sx={{
        borderRadius,
        backgroundColor: "primary.main",
        height,
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,

        "& ul": {
          padding: 0,
        },

        "& li": {
          color: "secondary.main",
          fontSize: "0.85rem",

          "@media (min-width: 600px)": {
            fontSize: "1rem",
          },

          "@media (min-width: 900px)": {
            fontSize: "1.2rem",
          },
        },
      }}
      p={2}
    >
      {children}
    </MuiBox>
  );
};

export default Box;
