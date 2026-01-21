import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "var(--primary)",
    },
    background: {
      default: "var(--bg-page)",
      paper: "var(--bg-card)",
    },
    text: {
      primary: "var(--text-main)",
      secondary: "var(--text-soft)",
    },
  },
});
