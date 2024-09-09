"use client";

import {
  Emphasis,
  HeadListItem,
} from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import React from "react";
import AuthorName from "@/components/AuthorName";

export const Paragraph1: React.FC = () => {
  return (
    <>
      <ul>
        <HeadListItem>
          🐦Venho dos Campos Gerais, do miolo do estado do Paraná, e amo circo.
          🎪.
        </HeadListItem>
        <HeadListItem>
          🏛️Me graduei arquiteto e urbanista em Universidade pública e recebi
          destaque em Concurso Nacional para estudantes da área.
        </HeadListItem>
        <HeadListItem>
          👨🏽‍💻Decidi migrar para a área de tecnologia. Tanto pelo número maior de
          oportunidades quanto pelo desejo de saber o que é esse tal de{" "}
          <code>código</code>, e estou muito satisfeito com esta decisão 😊.
        </HeadListItem>
        <HeadListItem>
          💬E não menos importante falo, escuto e escrevo Inglês e Espanhol em
          nível Avançado.
        </HeadListItem>
      </ul>
    </>
  );
};
export const Paragraph2: React.FC = () => {
  return (
    <>
      <p>
        Minhas realizações na área tech <Emphasis>mais legais</Emphasis> são:
      </p>
      <ul>
        <HeadListItem>
          💡Faço parte do time de desenvolvimento da{" "}
          <AuthorName
            author={"Lacrei Saúde"}
            site="https://lacreisaude.com.br/"
          />{" "}
          uma ONG/Startup que oferece à comunidade LGBTQIAPN+ um acesso à saúde
          clínica seguro e inclusivo;
        </HeadListItem>
        <HeadListItem>
          ✍🏽Prestei auxílio para desenvolvedores front end iniciantes oferecendo
          Revisão de Código. Foram mais de 40 reviews minuciosos e em inglês;
        </HeadListItem>
        <HeadListItem>
          🚣🏽‍♂️Liderei e desenvolvi aplicação Full Stack de um e-commerce de
          equipamentos musicais junto de três colegas. Nele contribui no Front
          end, Back end e em Testes funcionais de ponta a ponta.
        </HeadListItem>
      </ul>
    </>
  );
};

export const Paragraph3: React.FC = () => {
  return (
    <p>
      Estou aberto para trocar ideias e terei prazer em falar com você :)
      <Emphasis style={{ display: "block" }}>Bora aí?</Emphasis>
    </p>
  );
};
