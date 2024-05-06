"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { arboriaFont } from "@/fonts/Arboria/arboria";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: [
      arboriaFont.style.fontFamily,
      inter.style.fontFamily
    ].join(","),
  },
});

export default theme;
