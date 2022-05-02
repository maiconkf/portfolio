import Aside from "../components/Aside";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.dark",
        minHeight: "100vh",
      }}
    >
      <Aside />
      <Box></Box>
    </Box>
  );
}
