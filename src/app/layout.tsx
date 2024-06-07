import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Laboratório de AI",
  description:
    "Gerencie suas assistentes inteligentes de forma simples e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className="h-full"
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
