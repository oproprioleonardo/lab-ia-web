"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import arboriaFont from "@/fonts/arboria";
import kallistoFont from "@/fonts/kallisto";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: [
      arboriaFont.style.fontFamily,
      kallistoFont.style.fontFamily,
      inter.style.fontFamily,
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
