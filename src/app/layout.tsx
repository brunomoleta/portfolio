import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./custom.variables.css";
import { Providers } from "@/providers/Providers";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: ["sistem-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Bruno Moleta's portfolio",
  description: "Full stack developer portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
      <body className={inter.className}>
      <Providers>{children}</Providers>
      </body>
      </html>
  );
}
