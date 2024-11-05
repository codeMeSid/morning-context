"use client";
import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  typography: {
    fontFamily: "var(--font-matteo-regular)",
    h6: { fontFamily: "var(--font-playfair)" },
    h4: { fontFamily: "var(--font-playfair)" },
  },
  palette: {
    common: {
      black: "#292929",
    },
    background: {
      default: "#FFF9F1",
    },
  },
});
