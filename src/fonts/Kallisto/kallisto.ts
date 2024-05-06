import localFont from "next/font/local";

export const kallistoFont = localFont({
  display: "swap",
  src: [
    {
      path: "./Kallisto Bold Italic.otf",
      style: "italic",
      weight: "bold",
    },
    {
      path: "./Kallisto Bold.otf",
      weight: "bold",
    },
    {
      path: "./Kallisto Heavy Italic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "./Kallisto Heavy.otf",
      weight: "900",
    },
    {
      path: "./Kallisto Light Italic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./Kallisto Light.otf",
      weight: "300",
    },
    {
      path: "./Kallisto Medium Italic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./Kallisto Medium.otf",
      weight: "500",
    },
    {
      path: "./Kallisto Thin Italic.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./Kallisto Thin.otf",
      weight: "100",
    },
  ],
});
