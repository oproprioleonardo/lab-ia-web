import localFont from "next/font/local";

const redditFont = localFont({
  display: "swap",
  variable: "--reddit-font",
  src: [
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "900",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "800",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "700",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "600",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "300",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "500",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "200",
    },
    {
      path: "./RedditMono/RedditMono-VariableFont_wght.ttf",
      weight: "100",
    },
  ],
});

export default redditFont;
