import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk/wght.css";
import "./custom.variables.css";
import { Providers } from "@/providers/Providers";
import React from "react";
import { Header } from "@/components/Header";
import { PageMain } from "@/components/Main";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bruno Moleta's portfolio",
  description: "Bruno Moleta's Full Stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          <PageMain>{children}</PageMain>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
