import localFont from "next/font/local";

const serenity = localFont({
  display: "swap",
  variable: "--serenity-font",
  src: [
    {
      path: "./Serenity/Serenity Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Bold.otf",
      weight: "700",
    },
    {
      path: "./Serenity/Serenity Demi Bold Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Demi Bold.otf",
      weight: "600",
    },
    {
      path: "./Serenity/Serenity Extra Light Italic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Extra Light.otf",
      weight: "200",
    },
    {
      path: "./Serenity/Serenity Heavy Italic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Heavy.otf",
      weight: "900",
    },
    {
      path: "./Serenity/Serenity Light Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Light.otf",
      weight: "300",
    },
    {
      path: "./Serenity/Serenity Medium Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Medium.otf",
      weight: "500",
    },
    {
      path: "./Serenity/Serenity Thin Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Serenity/Serenity Thin.otf",
      weight: "100",
    },
  ],
});
export default serenity;