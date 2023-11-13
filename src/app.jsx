import "./app.css";
import { ThemeProvider, styled } from "@mui/system";
import { darkTheme } from "./utils/themes";
import { Hidden } from "@mui/material";
import { Navbar, HeroSection, Skill, Education } from "./components/";
import { BrowserRouter } from "react-router-dom";
const Body = styled("div")(({ theme }) => ({
  backgroundColor: theme.bg,
  width: "100%",
  height: "100%",
  overflowX: "hidden",
}));
const Wrapper = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(38.73deg, rgba(0, 0, 255, 0.15) 0%, rgba(0, 32, 255, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
  width: "100%",
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
}));

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {" "}
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skill />
            <Education />
          </Wrapper>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}
