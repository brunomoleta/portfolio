import Bruno from "@/assets/Authors/retrato-400x400.png";
import Filipe from "@/assets/Authors/Filipe.png";
import Gustavo from "@/assets/Authors/Gustavo.png";
import Joao from "@/assets/Authors/Joao-Pedro.png";
import { Intro } from "@/types/types";

export const projsIntro: Intro[] = [
  {
    id: 1,
    url: "durval-music-shop",
    step: 0,
    motivation: "Hackaton Kenzie Academy Brasil",
    goals:
      "Trazer a vida um e-commerce de equipamentos musicais" +
      " onde o usuário anuncia produtos, faz seu carrinho" +
      " e realiza CRUD de informações pessoais.",
    about1:
      "Aplicação desenvolvida do zero absoluto. " +
      "Partimos tão somente de 'fazer um e-commerce full stack'. " +
      " Tivemos três semanas para produzí-lo, sendo este o primeiro projeto full stack nosso." +
      " Logo, a organização foi um desafio em si mesmo.",
    about2: "",
    target:
      "Músicistas de todas as idades que buscam comprar ou vender equipamentos musicais.",
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
  },
  {
    id: 2,
    step: 0,
    url: "easy-bank-investments",
    goals:
      "Criar uma aplicação full stack em Typescript com design interessante onde investidores" +
      " escolhem seu assessor de investimentos pessoal no momento em que a conta" +
      " é criada.",
    target:
      "Pessoas que estão iniciando sua caminhada no mundo dos investimentos.",
    authors: [
      {
        image: Bruno,
        name: "Bruno Moleta",
      },
    ],
    date: "Fevereiro/2024",
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
  },
];
