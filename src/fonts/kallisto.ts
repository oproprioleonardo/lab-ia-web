import localFont from "next/font/local";

const kallistoFont = localFont({
  display: "swap",
  src: [
    {
      path: "./Kallisto/Kallisto Bold Italic.otf",
      style: "italic",
      weight: "bold",
    },
    {
      path: "./Kallisto/Kallisto Bold.otf",
      weight: "bold",
    },
    {
      path: "./Kallisto/Kallisto Heavy Italic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "./Kallisto/Kallisto Heavy.otf",
      weight: "900",
    },
    {
      path: "./Kallisto/Kallisto Light Italic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./Kallisto/Kallisto Light.otf",
      weight: "300",
    },
    {
      path: "./Kallisto/Kallisto Medium Italic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./Kallisto/Kallisto Medium.otf",
      weight: "500",
    },
    {
      path: "./Kallisto/Kallisto Thin Italic.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./Kallisto/Kallisto Thin.otf",
      weight: "100",
    },
  ],
});

export default kallistoFont;
