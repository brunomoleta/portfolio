import { IProject } from "@/types/types";

import DurvalMobileHome from "@/assets/Durval/durval-home.jpg";
import BankMobileHome from "@/assets/Easy/bank_home_mobile.jpg";

import { DurvalFront, EasyBankFront } from "@/services/frontEnd.data";
import { DurvalBack, EasyBankBack } from "@/services/backEnd.data";

export const projects: IProject[] = [
  {
    title: "Durval Music Shop",
    subTitle:
      "E-commerce onde usuários podem comprar ou vender equipamentos musicais. " +
      "Possui fluxo similar ao Mercado Livre ou Olx. ",
    about1:
      "Aplicação desenvolvida do zero absoluto. Partimos tão somente do desafio: fazer um e-commerce full stack. Foi o primeiro projeto" +
      " robusto e independente feito por cada um da equipe.",
    about2:
      " Fui responsável por definir o Design de Interface" +
      "(o que foi desafiador pois nunca tive que pensar em um design antes), por larga parte do Front end e " +
      "por toda a documentação do projeto.",
    motivation: "Hackaton Kenzie Academy Brasil",
    tags: [
      "react.js",
      "node.js",
      "express.js",
      "postgreSQL",
      "styled-components",
    ],
    illustration: DurvalMobileHome,

    live: "https://durval-music-shop.vercel.app/",
    doc: "https://loja-do-durval.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/durval-music-shop-server",
    frontEndRepo: "https://github.com/brunomoleta/durval-music-shop-client",

    href: "durval-music-shop",

    authors: ["Bruno Moleta", "Gustavo Lazarin", "Filipe Otávio", "João Pedro"],

    date: "Novembro/2023",
    frontImages: DurvalFront,

    backImages: DurvalBack,
  },
  {
    title: "Easybank Investments",
    subTitle:
      "Aplicação onde investidores obtém orientação 1:1 de assessores de investimentos" +
      " desde o momento que criam a conta.",
    about1:
      "Aplicação desenvolvida do zero absoluto. O desafio:" +
      " desenvolver aplicação full stack em Typescript com operações de criação, leitura, edição e listagem(CRUD) dos dados do usuário, e " +
      "estabelecer junto a este uma relação 1:N com outra entidade.",
    about2:
      " Para tornar o projeto mais divertido e ancorado ao mundo real " +
      " foi tomado como base um template de design(figma) do site frontendmentor.io e o contexto " +
      "do mundo de investimentos.",
    motivation: "Projeto final Kenzie Academy Brasil",

    tags: ["next.js", "node.js", "nest.js", "postgreSQL", "styled-components"],
    illustration: BankMobileHome,
    live: "https://easybank-investments.vercel.app/",
    doc: "https://investment-fullstack.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/Investment-app-server",
    frontEndRepo: "https://github.com/brunomoleta/Investment-app-client",
    href: "easy-bank-investments",
    authors: ["Individual"],
    date: "Fevereiro/2024",

    frontImages: EasyBankFront,
    backImages: EasyBankBack,
  },
];
