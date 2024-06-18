import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import reddit from "@/fonts/reddit-mono";
import serenity from "@/fonts/serenity";
import arboria from "@/fonts/arboria";
import aviano from "@/fonts/aviano";

export const metadata: Metadata = {
  title: {
    default: "DAI",
    template: `%s | DAI`,
  },
  description:
    "Gerencie suas assistentes inteligentes de forma simples e eficiente.",
  openGraph: {
    title: "DAI",
    description:
      "Gerencie suas assistentes inteligentes de forma simples e eficiente.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`h-full ${serenity.variable} ${arboria.variable} ${aviano.variable} ${reddit.variable}`}
      style={{
        backgroundColor: "#E1DEED",
      }}
    >
      <body className="h-full">
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
