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
  }
];

export const footer1 =
  "Sinta-se a vontade para entrar em contato. Seja relacionado a uma " +
  "oportunidade ou simplesmente para " +
  "trocarmos figurinhas :)";
export const madeBy =
  "Design e desenvolvimento feitos por mim mesmo, Bruno. " +
  "Última atualização em Outubro de 2024.";
