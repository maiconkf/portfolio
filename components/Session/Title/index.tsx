import { Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        "&:before": {
          content: '""',
          width: 32,
          height: 32,
          borderRadius: "100%",
          backgroundColor: "primary.main",
          position: "absolute",
          left: -48,
          top: -1,
        },

        "&:after": {
          content: '""',
          position: "absolute",
          top: 11,
          left: -36,
          borderRadius: "100%",
          width: 8,
          height: 8,
          backgroundColor: "secondary.light",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
