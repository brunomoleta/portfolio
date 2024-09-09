import {
  CVLogo,
  GithubLogo,
  LinkedinLogo,
} from "@/components/Footer/FooterList/FooterList.style";
import React from "react";
import { cvLink, github, linkedin } from "@/services/data";

export const footerData = [
  {
    title: "ir para linkedin",
    href: linkedin,
    icon: <LinkedinLogo />,
  },
  {
    title: "ir para github",
    href: github,
    icon: <GithubLogo />,
  },
  {
    title: "ir para Currículo Vitae",
    href: cvLink,
    icon: <CVLogo />,
  },
];

export const footer1 =
  "Sinta-se a vontade para entrar em contato. Seja relacionado a uma " +
  "vaga, dúvida a respeito de algo no portfólio ou simplesmente para " +
  "trocarmos figurinhas :)";
export const madeBy =
  "Design e desenvolvimento feitos por mim mesmo, Bruno. " +
  "Última atualização em Setembro de 2024.";
