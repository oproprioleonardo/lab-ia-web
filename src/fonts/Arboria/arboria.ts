import localFont from "next/font/local";

export const arboriaFont = localFont({
  display: "swap",
  src: [
    {
      path: "./Arboria-BoldItalic.otf",
      style: "italic",
      weight: "bold",
    },
    {
      path: "./Arboria-Bold.otf",
      weight: "bold",
    },
    {
      path: "./Arboria-BlackItalic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "./Arboria-Black.otf",
      weight: "900",
    },
    {
      path: "./Arboria-Book.otf",
      weight: "300",
    },
    {
      path: "./Arboria-BookItalic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./Arboria-LightItalic.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./Arboria-Light.otf",
      weight: "100",
    },
    {
      path: "./Arboria-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./Arboria-Medium.otf",
      weight: "500",
    },
    {
      path: "./Arboria-ThinItalic.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./Arboria-Thin.otf",
      weight: "200",
    },
  ],
});
