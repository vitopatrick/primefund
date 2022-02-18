import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fe4000",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fe4000",
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          backgroundColor: "#fe4000",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: "#fe4000",
        },
      },
    },
  },
});
