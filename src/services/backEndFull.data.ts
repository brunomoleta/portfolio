import { BackEndFull, FrontEndFull } from "@/types/types";
import { DurvalBack, EasyBankBack } from "@/services/backEnd.data.tsx";

export const backEndFullData: BackEndFull[] = [
  {
    id: 1,
    step: 2,
    bResponsibilities: ["Documentação no Swagger"],

    BChallenges: [
      "Realizar a conexão do front com o back end, já que foi a primeira vez de todos nós." +
        " Foi feito através do CORS;",
    ],
    bLearning: [
      "Foi de bastante valia aprender a usar o 'Swagger editor' para produzir a documentação;",
      " Aprendemos a conectar o front com o back end através do CORS;",
      "No início do projeto, foi desafiador definirmos a tabela de relacionamentos," +
        " mas houve muito aprendizado. Destaque especial para o Gustavo nesta parte;",
    ],

    bNextSteps: [
      "Refatorar o código do back end a fim de que ele se torne orientado a objetos;",
    ],
    backEndRepo: "https://github.com/brunomoleta/durval-music-shop-server",
    doc: "https://loja-do-durval.onrender.com/doc",
    backContent: DurvalBack,
  },
  {
    id: 1,
    step: 2,
    BChallenges: [
      "Foi o primeiro back end que fiz de ponta a ponta 100% individualmente;",
      "Fazer um token mais seguro colocando dentro dele apenas o id do usuário autenticado;",
      "Usar o o framework Nest.js ao invés do Express.js que era o mais familiar até então;",
      "O fato da aplicação possuir três tipos de usuário diferente: admin, advisor e investor" +
        " sendo cada um em uma tabela diferente e não todos juntos em uma possível tabela 'users' " +
        "trouxe complexidades que não eram esperadas;",
    ],

    bResponsibilities: [
      "Desde a criação e definição dos relacionamentos até o deploy e a documentação.",
    ],
    bLearning: [
      "Foi uma sensação empoderadora concluir um back end por conta própria aprendendo " +
        "um framework novo;",
      "Muito legal o momento que percebi que, ao buscar as informações de um usuário através" +
        " de somente o token, não tem como um usuário que não é o dono do token acessar os dados do mesmo;",
    ],
    bNextSteps: [
      "Entender melhor sobre como funcionam os Roles no Nest.js para aplicar diferentes" +
        " permissões em diferentes rotas;",
      "Gerar baterias de testes unitários automatizados;",
    ],
    backEndRepo: "https://github.com/brunomoleta/Investment-app-server",
    doc: "https://investment-fullstack.onrender.com/doc",
    backContent: EasyBankBack,
  },
];
