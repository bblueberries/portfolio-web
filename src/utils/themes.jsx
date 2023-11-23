import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#1C1C27",
      paper: "#1C1E27",
    },
    primary: {
      main: "#4E75DC",
    },
    text: {
      primary: "#F2F3F4",
      secondary: "#b1b2b3",
    },
    card: "#171721",
    card_light: "#191924",
    button: "#854CE6",
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#f0f0f0",
    },
    primary: {
      main: "#be1adb",
    },
    text: {
      primary: "#111111",
      secondary: "#48494a",
    },
    card: "#FFFFFF",
    button: "#5c5b5b",
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
});
