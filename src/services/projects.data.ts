import { IProject } from "@/types/types";

import DurvalMobileHome from "@/assets/Durval/durval-home.jpg";
import BankMobileHome from "@/assets/Easy/bank_home_mobile.jpg";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Durval Music Shop",
    subTitle:
      "E-commerce onde usuários podem comprar ou vender equipamentos musicais. " +
      "Possui fluxo similar ao Mercado Livre ou Olx. ",
    illustration: DurvalMobileHome,

    frontendTags: [
      "react.js",
      "radix ui",
      "styled-components",
      "typescript",
      "react context",
    ],

    backendTags: ["node.js", "postgreSQL", "prisma ORM ", "git", "express.js"],
    devopsTags: ["cypress.js"],

    href: "durval-music-shop",
  },
  {
    id: 2,
    title: "Easybank Investments",

    subTitle:
      "Aplicação onde investidores obtém orientação 1:1 de assessores de investimentos" +
      " desde o momento que criam a conta.",

    frontendTags: [
      "react.js",
      "next.js",
      "styled-components",
      "radix-ui",
      "typescript",
    ],
    backendTags: ["Nest.js", "Node.js", "Prisma ORM", "PostgreSQL"],
    devopsTags: ["cypress.js"],

    illustration: BankMobileHome,

    href: "easy-bank-investments",
  },
];
