import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk/wght.css";
import "./custom.variables.css";
import { Providers } from "@/providers/Providers";
import React from "react";
import { Header } from "@/components/Header";
import { PageMain } from "@/components/Main";
import { Footer } from "@/components/Footer";
// import { getCookies } from "cookies-next";

export const metadata: Metadata = {
  title: "Bruno Moleta | Desenvolvedor full stack ",
  description:
    "Portfólio de Bruno Moleta contendo dois projetos extensivamente detalhados. " +
    "A explicação compreende autores envolvidos, front end, back end e testes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookies = getCookies();
  // const theme = cookies["color-theme"] as string | undefined;
  // const themeColors = "red"

  return (
    // <html lang="pt-BR" data-color-theme={themeColors} style={themeColors}>
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
