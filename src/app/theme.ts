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
      inter.style.fontFamily,
    ].join(","),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontWeight: "bold",
            backgroundColor: "#e1e2e6",
            border: "none",
            borderWidth: "0px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "2px solid rgba(78, 195, 253, 1)",
            },
          },
          "& .MuiOutlinedInput-root .Mui-focused": {
              border: "2px solid rgba(78, 195, 253, 1)",
           
          },
          "& .Mui-error": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "2px solid rgba(78, 195, 253, 1)",
            },
          },

          "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "2px solid rgba(78, 195, 253, 1)",
            },
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "2px solid rgba(78, 195, 253, 1)",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#553c9a",
          fontWeight: "bold",
          border: "none",
          borderWidth: "0px",
          "& .Mui-focused": {
            border: "none",
            borderWidth: "0px",
            color: "#553c9a",
            fontWeight: "bold",
          },
          "& .Mui-error": {
            border: "none",
            borderWidth: "0px",
            color: "#553c9a",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

export default theme;
