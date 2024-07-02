import { ITechItem } from "@/types/types";
import { TechImage } from "@/components/Main/Stack/ATrigger/ATrigger.style";

export const frontEndList: ITechItem[] = [
  {
    name: "React",
    logoImage: (
      <TechImage
        alt=""
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
        alt=""
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
        alt=""
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
        alt=""
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
        alt=""
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      />
    ),
    items: [
      "Utilizar o PrismaORM na comunicação entre o Node.js e o banco de dados relacional;",
      "Implantar Api's restful com Typescript utilizando os frameworks Express.js ou Nest.js;",
      "Desenvolver back end em conjunto com o banco de dados PostgreSQL;",
      "Desenvolver documentação detalhada das rotas de Api's restful usando Swagger-ui;",
    ],
  },
  {
    name: "Git",
    logoImage: (
      <TechImage
        alt=""
        width="40"
        height="40"
        src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg"
      />
    ),
    items: [
      "Criar commit's baseado em boas práticas, com zelo para mantê-los curtos e facilitar a revisão de código por pares;",
    ],
  },
];

export const qaList: ITechItem[] = [
  {
    name: "Cypress",
    logoImage: (
      <TechImage
        alt=""
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg"
      />
    ),
    items: [
      "Realizo testes de interface automatizados usando Cypress IO;",
      "Aplicar estes testes em conjunto com o Cucumber para fazê-los baseados em BDD",
    ],
  },
  {
    name: "Postman API",
    logoImage: (
      <TechImage
        alt=""
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
      />
    ),
    items: [
      "Desenvolvi testes manuais de API Rest que facilitam o desenvolvimento do back end;",
    ],
  },
  {
    name: "Jest | Testes unitários",
    logoImage: (
      <TechImage
        alt=""
        width="40"
        height="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
      />
    ),
    items: ["Desenvolvi testes unitários em componentes React.js;"],
  },
];
