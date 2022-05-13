import Aside from "../components/Aside";
import { Box, Grid, Container } from "@mui/material";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences/index";
import Education from "../components/Education";
import Projects from "../components/Projects";

export default function Home() {
  return (
    // <Grid
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     backgroundColor: "primary.dark",
    //     minHeight: "100vh",

    //     "@media (min-width: 1200px)": {
    //       flexWrap: "nowrap",
    //     },
    //   }}
    // >
    <Grid container sx={{ backgroundColor: "primary.dark" }}>
      <Grid item xs={12} lg={3}>
        <Aside />
      </Grid>
      <Grid item xs={12} lg={9} px={[2, 2, 2, 9]} py={5}>
        <Experiences />
        <Projects />
        <Education />
        <Skills />
      </Grid>
    </Grid>
  );
}
