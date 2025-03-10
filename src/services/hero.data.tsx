"use client";

import {
  Emphasis,
  HeadListItem,
} from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import React from "react";
// import AuthorName from "@/components/AuthorName";

export const Paragraph1: React.FC = () => {
  return (
    <>
      <ul>
        <HeadListItem>
          🐦Venho dos Campos Gerais, do miolo do estado do Paraná, e tenho orgulho da minha <Emphasis>Imbituva</Emphasis>.
        </HeadListItem>
        <HeadListItem>
          🏛️Me graduei <Emphasis>arquiteto e urbanista</Emphasis> na Universidade Tecnológica Federal do Paraná com
          destaque em Concurso Nacional para estudantes da área.
        </HeadListItem>
        <HeadListItem>
          👨🏽‍💻Dediquei um ano e meio da minha carreira com {" "}
          <code>programação web</code>.
        </HeadListItem>
        <HeadListItem>
          ❤️No segundo semestre de 2024 embarquei no desafio de ser <Emphasis>Consultor imobiliário</Emphasis> na imobiliária Lopes Gold e estou contente em ser o auxiliador de pessoas na realização de seus sonhos.
        </HeadListItem>
      </ul>
    </>
  );
};
export const Paragraph2: React.FC = () => {
  return (
    <>
    </>
  );
};

export const Paragraph3: React.FC = () => {
  return (
    <p>
      Estou aberto para trocar ideias e terei prazer em falar com você, vamos?
    </p>
  );
};
