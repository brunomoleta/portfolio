import React from "react";
import { TechImage } from "@/components/Main/Stack/ATrigger/ATrigger.style";
import {IProject, ITechItem} from "@/types/children";
import CasioKeyboard from "@/components/CasioKeyboard";

export const heroHeading = "Bruno Moleta. Full-Stack Developer.";
export const heroParagraph =
  "O Bruno é um profissional multidisciplinar, versátil e dinâmico com graduação em arquitetura, passagem pelo universo de startups e formação em desenvolvimento full-Stack.";

export const linksList = [
  {
    name: "github",
    href: "https://github.com/brunomoleta",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/bruno-moleta-santos-desenvolvedor-full-stack/",
  },
  {
    name: "currículo vitae",
    href: "/",
  },
];

export const dropdownList = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "sobre",
    href: "/sobre-o-bruno",
  },
  {
    name: "projetos",
    href: "/projetos",
  },
  {
    name: "contato",
    href: "/contato",
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
    title: "durval Music Shop",
    subTitle: "e-commerce de equipamentos musicais",
    tags: ["react", "styled-components", "node.js", "express.js", "postgreSQL"],
    illustration: "https://img.freepik.com/psd-gratuitas/mao-segurando-uma-nova-maquete-de-smartphone-cercada-por-folhas_252953-23.jpg?w=1380&t=st=1709827948~exp=1709828548~hmac=fcc9a47070ef686a67d65ab1432f6ee031493c51c2bb575de05eb0ca1540dc8b",
    live: "https://durval-music-shop.vercel.app/",
    doc: "https://loja-do-durval.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/durval-music-shop-server",
    frontEndRepo: "https://github.com/brunomoleta/durval-music-shop-client",
  },
  {
    title: "Easybank Investments",
    subTitle: "onde investidores encontram assessores de investimentos",
    tags: ["next.js", "node.js", "nest.js", "postgreSQL", "styled-components"],
    illustration: "https://img.freepik.com/psd-gratuitas/mao-segurando-uma-nova-maquete-de-smartphone-cercada-por-folhas_252953-23.jpg?w=1380&t=st=1709827948~exp=1709828548~hmac=fcc9a47070ef686a67d65ab1432f6ee031493c51c2bb575de05eb0ca1540dc8b",
    live: "https://easybank-investments.vercel.app/",
    doc: "https://investment-fullstack.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/Investment-app-server",
    frontEndRepo: "https://github.com/brunomoleta/Investment-app-client",
  },
];
