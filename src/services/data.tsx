import React from "react";
import {TechImage} from "@/components/Main/Stack/ATrigger/ATrigger.style";
import {IProject, ITechItem} from "@/types/types";
import DurvalMobileHome from "../assets/Durval/durval-home.jpg"
import BankMobileHome from "../assets/Easy/bank_home_mobile.jpg";
import {
  CVLogo,
  GithubLogo,
  LinkedinLogo,
} from "@/components/Footer/FooterList/FooterList.style";

export const github = "https://github.com/brunomoleta"
export const cvLink = "https://drive.google.com/file/d/1QDu5DKaSdNzCIrMOWQHO_qOfBqcIbIAs/view?usp=drive_link";
export const linkedin = "https://www.linkedin.com/in/bruno-moleta-santos-desenvolvedor-full-stack/"
export const heroHeading = "Bruno Moleta. Full-Stack Developer.";
export const heroParagraph =
  "O Bruno é um profissional multidisciplinar, versátil e dinâmico com graduação em arquitetura, passagem pelo universo de startups e formação em desenvolvimento full-Stack.";

export const linksList = [
  {
    name: "github",
    href: github,
  },
  {
    name: "linkedin",
    href: linkedin,
  },
  {
    name: "currículo vitae",
    href: cvLink,
  },
];

export const dropdownList = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "sobre",
    href: "/#sobre-o-bruno",
  },
  {
    name: "tecnologias",
    href: "/#tecnologias",
  },

  {
    name: "projetos",
    href: "/#projetos",
  },
  {
    name: "contato",
    href: "/#contato",
  },
];



export const frontEndList: ITechItem[] = [
  {
    name: "React",
    logoImage: (
      <TechImage
        alt="react.js"
        title="react.js"
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      />
    ),
    items: [
      // "Montagem de testes unitários utilizando Jest e React testing Library;",
      "Programar tomando como partida o Typescript;",
      "Desenvolver cuidadosamente a arquitetura dos componentes a fim de torná-los simples e escaláveis;",
    ],
  },
  {
    name: "Next.js",
    logoImage: (
      <TechImage
        alt="next.js"
        title="next.js"
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      />
    ),
    items: [
      "Denominar componentes renderizados no Cliente e no Servidor;",
      "Fazer a autorização do usuário no Servidor através de Cookies;",
    ],
  },
  {
    name: "HTML",
    logoImage: (
      <TechImage
        alt="html"
        title="html"
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
      />
    ),

    items: [
      "Implementar com atenção a acessibilidade de usuários que utilizam o teclado;",
      "Utilizar de bibliotecas de componentes focados em acessibilidade como Ariakit e Radix-ui;",
    ],
  },
  {
    name: "CSS",
    logoImage: (
      <TechImage
        alt="CSS"
        title="css"
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
      />
    ),
    items: [
      "Realizar revisões de código focado em HTML e CSS, com feedback valioso e orientação, para outros desenvolvedores, em inglês na plataforma frontendmentor.io;",
      "Implementar CSS baseado nos frameworks Sass, Tailwind e principalmente Styled-Components;",
      "Levar ao usuário interfaces responsivas independente do tamando do dispositivo;",
    ],
  },
];

export const backEndList: ITechItem[] = [
  {
    name: "Node.js",
    logoImage: (
      <TechImage
        alt="node.js"
        title="node.js"
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      />
    ),
    items: [
      "Utilizar o PrimaORM na comunicação entre o Node.js e o banco de dados relacional;",
      "Implantar Api's restful com Typescript utilizando os frameworks Express.js ou Nest.js;",
      "Desenvolver back end em conjunto com o banco de dados PostgreSQL;",
      "Desenvolver documentação detalhada das rotas de Api's restful usando Swagger-ui;",
    ],
  },
  {
    name: "Git",
    logoImage: (
      <TechImage
        alt="Git"
        title="Git"
        width="40"
        height="40"
        src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg"
      />
    ),
    items: [
      "Criar commit's baseado em boas práticas, com zelo para mantê-los curtos e facilitar a revisão de código por pares;",
    ],
  },
];

export const projects: IProject[] = [
  {
    title: "Durval Music Shop",
    subTitle: "e-commerce de equipamentos musicais.",
    tags: ["react.js", "node.js", "express.js", "postgreSQL","styled-components"],
    illustration: DurvalMobileHome,
    live: "https://durval-music-shop.vercel.app/",
    doc: "https://loja-do-durval.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/durval-music-shop-server",
    frontEndRepo: "https://github.com/brunomoleta/durval-music-shop-client",
    href:"durval-music-shop",
    authors: ["Bruno Moleta", "Gustavo Lazarin", "Filipe Otávio", "João Pedro"]
  },
  {
    title: "Easybank Investments",
    subTitle: "onde investidores encontram assessores de investimentos.",
    tags: ["next.js", "node.js", "nest.js", "postgreSQL", "styled-components"],
    illustration: BankMobileHome,
    live: "https://easybank-investments.vercel.app/",
    doc: "https://investment-fullstack.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/Investment-app-server",
    frontEndRepo: "https://github.com/brunomoleta/Investment-app-client",
    href:"easy-bank-investments",
    authors: ["Bruno Moleta"]
  },
];

export const footerData = [
  {
    title:"ir para linkedin",
    href: linkedin,
    icon: <LinkedinLogo/>
  },
  {
    title:"ir para github",
    href: github,
    icon: <GithubLogo/>
  },
  {
    title:"ir para Currículo Vitae",
    href: cvLink,
    icon: <CVLogo/>
  }
]

export const whatsappURL = 'https://api.whatsapp.com/send?phone=5541992238239'

