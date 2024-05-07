import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk/wght.css";
import "./custom.variables.css";
import { Providers } from "@/providers/Providers";
import React from "react";
import { Header } from "@/components/Header";
import { PageMain } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { DARK_COLORS, LIGHT_COLORS } from "@/styles/colors.ts";
import DarkLightToggle from "@/components/DarkLightToggle";
import { cookies } from "next/headers";

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
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";
  const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;

  return (
    // @ts-ignore
    <html lang="pt-BR" data-color-theme={theme} style={themeColors}>
      <body>
        <Providers>
          <Header>
            <DarkLightToggle initialTheme={theme} />
          </Header>
          <PageMain>{children}</PageMain>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
