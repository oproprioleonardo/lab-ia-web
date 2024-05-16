"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { arboriaFont } from "@/fonts/Arboria/arboria";
import { kallistoFont } from "@/fonts/Kallisto/kallisto";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: [
      arboriaFont.style.fontFamily,
      kallistoFont.style.fontFamily,
      inter.style.fontFamily
    ].join(","),
  },
});

export default theme;
