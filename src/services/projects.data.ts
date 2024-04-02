import { IProject } from "@/types/types";

import DurvalMobileHome from "@/assets/Durval/durval-home.jpg";
import BankMobileHome from "@/assets/Easy/bank_home_mobile.jpg";

import { DurvalFront, EasyBankFront } from "@/services/frontEnd.data";
import { DurvalBack, EasyBankBack } from "@/services/backEnd.data";
import Bruno from "../assets/Authors/retrato-400x400.png";
import Joao from "../assets/Authors/Joao-Pedro.png";
import Filipe from "../assets/Authors/Filipe.png";
import Gustavo from "../assets/Authors/Gustavo.png";

export const projects: IProject[] = [
  {
    id: 1,
    url: "durval-music-shop",
    title: "Durval Music Shop",
    subTitle:
      "E-commerce onde usuários podem comprar ou vender equipamentos musicais. " +
      "Possui fluxo similar ao Mercado Livre ou Olx. ",
    goals:
      "Trazer a vida um e-commerce de equipamentos musicais" +
      " onde o usuário anuncia produtos, faz seu carrinho" +
      " e realiza CRUD de informações pessoais.",
    target: "Músicistas de todas as idades.",

    tags: [
      "react.js",
      "node.js",
      "express.js",
      "postgreSQL",
      "styled-components",
    ],

    Fresponsibilities: [
      "Desenvolvimento do design UI do zero;",
      "Carrinho de compras;",
      "Responsividade da aplicação;",
      "Criação de login e cadastro em várias etapas;",
      "Página inicial;",
    ],
    Bresponsibilities: ["Documentação no Swagger"],

    BChallenges: [
      "Realizar a conexão do front com o back end, já que foi a primeira vez de todos nós." +
        " Foi feito através do CORS;",
    ],
    FChallenges: [
      "Fazer o componente Modal responsivo em situações diferentes como:" +
        " carrinho de compras, login e cadastro e alteração de dados do usuário;",
    ],

    Flearning: [
      "Compreensão da dificuldade e do tempo necessário para produzir" +
        " uma UI razoável sem um Designer no time;",
      "Entendimento da importância de bons títulos aos commits. A fim de facilitar a leitura do histórico do código " +
        "desenvolvido pela equipe;",
      "Foi o primeiro projeto onde usei com frequência o teclado para navegar o app ao invés " +
        "do mouse. Com esta ação, foi possível fazê-la mais acessível;",
    ],
    Blearning: [
      "Foi de bastante valia aprender a usar o 'Swagger editor' para produzir a documentação;",
      " Aprendemos a conectar o front com o back end através do CORS;",
      "No início do projeto, foi desafiador definirmos a tabela de relacionamentos," +
        " mas houve muito aprendizado. Destaque especial para o Gustavo nesta parte;",
    ],

    BnextSteps: [
      "Refatorar o código do back end a fim de que ele se torne orientado a objetos;",
    ],
    FnextSteps: [
      "Fazer filtragens na busca do usuário por um produto específico por maior ou menor preço e produtos mais ou menos novos;",
      "Concluir o fluxo do usuário até o pagamento final, cálculo de frete e edição do estoque do produto após a compra ser finalizada;",
    ],
    about1:
      "Aplicação desenvolvida do zero absoluto. " +
      "Partimos tão somente de 'fazer um e-commerce full stack'. " +
      " Tivemos três semanas para produzí-lo, sendo este o primeiro projeto full stack nosso." +
      " Logo, a organização foi um desafio em si mesmo.",
    about2: "",
    motivation: "Hackaton Kenzie Academy Brasil",
    frontendTags: [
      "react.js",
      "radix ui",
      "styled-components",
      "typescript",
      "react context",
    ],
    backendTags: ["node.js", "postgreSQL", "prismaORM ", "git", "express.js"],
    illustration: DurvalMobileHome,

    live: "https://durval-music-shop.vercel.app/",
    doc: "https://loja-do-durval.onrender.com/doc",
    backEndRepo: "https://github.com/brunomoleta/durval-music-shop-server",
    frontEndRepo: "https://github.com/brunomoleta/durval-music-shop-client",

    href: "durval-music-shop",

    authors: [
      {
        image: Bruno,
        name: "Bruno Moleta",
      },
      {
        image: Filipe,
        name: "Filipe Otávio",
      },
      {
        image: Gustavo,
        name: "Gustavo Lazarin",
      },
      {
        image: Joao,
        name: "João Pedro",
      },
    ],

    date: "Novembro/2023",
    frontImages: DurvalFront,

    backImages: DurvalBack,
  },
  {
    id: 2,
    url: "easy-bank-investments",
    title: "Easybank Investments",

    subTitle:
      "Aplicação onde investidores obtém orientação 1:1 de assessores de investimentos" +
      " desde o momento que criam a conta.",
    goals:
      "Criar uma aplicação full stack em Typescript com design interessante onde investidores" +
      " escolhem seu assessor de investimentos pessoal no momento em que a conta" +
      " é criada.",
    target:
      "Pessoas que estão iniciando sua caminhada no mundo dos investimentos.",

    Bresponsibilities: [
      "Desde a criação e definição dos relacionamentos até o deploy e a documentação.",
    ],
    BChallenges: [
      "Foi o primeiro back end que fiz de ponta a ponta 100% individualmente;",
      "Fazer um token mais seguro colocando dentro dele apenas o id do usuário autenticado;",
      "Usar o o framework Nest.js ao invés do Express.js que era o mais familiar até então;",
      "O fato da aplicação possuir três tipos de usuário diferente: admin, advisor e investor" +
        " sendo cada um em uma tabela diferente e não todos juntos em uma possível tabela 'users' " +
        "trouxe complexidades que não eram esperadas;",
    ],

    Flearning: [
      "Distinção entre componentes renderizados no Servidor e no Cliente usando Next.js;",
      "Autenticação através de Cookies com o servidor do Next.js dentro do React.useEffect;",
      "No CSS, posicionamento da imagem principal da imagem inicial com 'width: 100svw' " +
        "na tela pequena e com 'max-width: 800px && position: absolute' na tela larga a fim de possibilitar " +
        "a posição desejada no Design;",
    ],
    FnextSteps: [
      "Adicionar funcionalidade de visualização de assessor através de filtro por experiência ou especialidade;",
      "Listagem de assessores com paginação;",
      "Melhorar a velocidade das mudanças de página;",
    ],

    Blearning: [
      "Foi uma sensação empoderadora concluir um back end por conta própria aprendendo " +
        "um framework novo;",
      "Muito legal o momento que percebi que, ao buscar as informações de um usuário através" +
        " de somente o token, não tem como um usuário que não é o dono do token acessar os dados do mesmo;",
    ],
    BnextSteps: [
      "Entender melhor sobre como funcionam os Roles no Nest.js para aplicar diferentes" +
        " permissões em diferentes rotas;",
      "Gerar baterias de testes unitários automatizados;",
    ],

    frontendTags: [
      "react.js",
      "next.js",
      "styled-components",
      "radix-ui",
      "typescript",
    ],
    backendTags: ["Nest.js", "Node.js", "PrimaORM", "PostgreSQL"],

    Fresponsibilities: [
      "Desde a adaptação do figma do site frontendmentor.io, produção de funcionalidades até" +
        " o deploy no Vercel.",
    ],
    FChallenges: [
      "Responsividade da seção principal da página inicial onde aparece o slogan e as imagens do aplicativo em funcionamento;",

      "O fluxo de cadastro ou login do usuário. A fim de diminuir o nível de informação mostrado" +
        " em cada tela e possibilitar o retorno do usuário a uma etapa anterior, o nível de dificuldade " +
        " ficou bem interessante;",

      " Fazer os componentes Form e Input flexíveis." +
        " Desde o formulário com campos de Input com texto normal," +
        " até um Form com type='radio', onde você escolhe o assessor," +
        " sendo cada opção, um Card do assessor renderizado;",
    ],

    about1:
      "O requisito inicial era de que deveria haver uma relação 1:N entre um tipo de usuário e outro." +
      " Não havia design ou tema específico." +
      " A partir daí decidi adaptar um template do site frontendmentor.io e ter um produto baseado" +
      " no mundo de investimentos.",
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
    authors: [
      {
        image: Bruno,
        name: "Bruno Moleta",
      },
    ],
    date: "Fevereiro/2024",

    frontImages: EasyBankFront,
    backImages: EasyBankBack,
  },
];
