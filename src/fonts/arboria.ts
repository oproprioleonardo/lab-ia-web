import localFont from "next/font/local";

const arboriaFont = localFont({
  display: "swap",
  variable: "--arboria-font",
  src: [
    {
      path: "./Arboria/Arboria-BoldItalic.otf",
      style: "italic",
      weight: "bold",
    },
    {
      path: "./Arboria/Arboria-Bold.otf",
      weight: "bold",
    },
    {
      path: "./Arboria/Arboria-BlackItalic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "./Arboria/Arboria-Black.otf",
      weight: "900",
    },
    {
      path: "./Arboria/Arboria-Book.otf",
      weight: "300",
    },
    {
      path: "./Arboria/Arboria-Book.otf",
      weight: "400",
    },
    {
      path: "./Arboria/Arboria-BookItalic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./Arboria/Arboria-BookItalic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./Arboria/Arboria-LightItalic.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./Arboria/Arboria-Light.otf",
      weight: "100",
    },
    {
      path: "./Arboria/Arboria-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./Arboria/Arboria-Medium.otf",
      weight: "500",
    },
    {
      path: "./Arboria/Arboria-ThinItalic.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./Arboria/Arboria-Thin.otf",
      weight: "200",
    },
  ],
});

export default arboriaFont;
