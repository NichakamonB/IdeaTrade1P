import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.bg.primary,
      paper: colors.bg.card,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.accent,
    },
    text: {
      primary: colors.text.main,
      secondary: colors.text.secondary,
    },
  },
  shape: {
    borderRadius: 12,
  },
});
