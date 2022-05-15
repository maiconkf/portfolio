import React, { ReactNode } from "react";
import { Box as MuiBox } from "@mui/material";

type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;

type Props = {
  borderRadius?: string[] | string;
  flexDirection?: FlexDirection;
  justifyContent?: string;
  alignItems?: string;
  height?: number;
  children: ReactNode;
};

const Box: React.FC<Props> = ({
  borderRadius,
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  height = 100,
  children,
}) => {
  return (
    <MuiBox
      sx={{
        borderRadius,
        backgroundColor: "primary.main",
        height,
        display: "flex",
        justifyContent,
        alignItems,
        flexDirection,

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
