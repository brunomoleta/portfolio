import {
  deviconGithubPlain,
  deviconHtml5Plain,
  deviconReactOriginal,
  deviconNodejsPlain,
  deviconNextjsOriginalWordmark,
  deviconCss3Plain,
} from "devicon";

export const heroHeading = "Bruno Moleta. Full-Stack Developer.";
export const heroParagraph =
  "Sou um profissional multidisciplinar, versátil e dinâmico com graduação em arquitetura, passagem pelo universo de startups e formação em desenvolvimento full-Stack.";

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

export interface ITechItem {
  name: string;
  logoImage: string;
  items: string[];
}

export const frontEndList: ITechItem[] = [
  {
    name: "React",
    logoImage: deviconReactOriginal,
    items: [
      // "Montagem de testes unitários utilizando Jest e React testing Library;",
      "Programar tomando como partida o Typescript;",
      "Desenvolver cuidadosamente a arquitetura dos componentes a fim de torná-los simples e escaláveis;",
    ],
  },
  {
    name: "Next.js",
    logoImage: deviconNextjsOriginalWordmark,
    items: [
      "Denominar componentes renderizados no Cliente e no Servidor;",
      "Fazer a autorização do usuário no Servidor através de Cookies;",
    ],
  },
  {
    name: "HTML",
    logoImage: deviconHtml5Plain,
    items: [
      "Implementar com atenção a acessibilidade de usuários que utilizam o teclado;",
      "Utilizar de bibliotecas de componentes focados em acessibilidade como Ariakit e Radix-ui;",
    ],
  },
  {
    name: "CSS",
    logoImage: deviconCss3Plain,
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
    logoImage: deviconNodejsPlain,
    items: [
      "Utilizar o PrimaORM na comunicação entre o Node.js e o banco de dados relacional;",
      "Implantar Api's restful com Typescript utilizando os frameworks Express.js ou Nest.js;",
      "Desenvolver back end em conjunto com o banco de dados PostgreSQL;",
      "Desenvolver documentação detalhada das rotas de Api's restful usando Swagger-ui;",
    ],
  },
  {
    name: "Git",
    logoImage: deviconGithubPlain,
    items: [
      "Criar commit's baseado em boas práticas, com zelo para mantê-los curtos e facilitar a revisão de código por pares;",
    ],
  },
];
