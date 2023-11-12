import "./app.css";
import { ThemeProvider, styled } from "@mui/system";
import { darkTheme } from "./utils/themes";
import { Hidden } from "@mui/material";
const Body = styled("div")(({ theme }) => ({
  // color: "blue",
  backgroundColor: theme.bg,
  width: "100%",
  height: "100%",
  overflowX: "hidden",
}));
export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>Portfolio</Body>
    </ThemeProvider>
  );
}
