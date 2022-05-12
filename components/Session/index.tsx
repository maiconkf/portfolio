import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  content?: string;
  children: ReactNode;
};

const Session: React.FC<Props> = ({ content = '""', children }) => {
  return (
    <Box
      pb={3}
      sx={{
        position: "relative",
        "&:before": {
          content,
          position: "absolute",
          left: -33,
          top: 0,
          width: "1px",
          height: "100%",
          backgroundColor: "secondary.dark",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Session;
