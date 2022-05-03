import React, { ReactNode } from "react";
import { Box as MuiBox, Typography } from "@mui/material";

type Props = {
  borderRadius?: string;
  flexDirection?: string;
  children: ReactNode;
};

const Box: React.FC<Props> = ({ borderRadius, flexDirection, children }) => {
  return (
    <MuiBox
      sx={{
        borderRadius,
        backgroundColor: "primary.main",
        height: 100,
        display: "flex",
        flexDirection,
        justifyContent: "center",
        alignItems: "center",

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
      py={2}
    >
      {children}
    </MuiBox>
  );
};

export default Box;
