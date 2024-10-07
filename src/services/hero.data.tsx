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
          👨🏽‍💻Sonhava em {" "}
          <code>programar</code>, então me dediquei por mais de um ano para me tornar um desenvolvedor web full stack. Com este conhecimento fui voluntário na ONG Lacrei Saúde usando os conhecimentos da área 😊.
        </HeadListItem>
        <HeadListItem>
          💬 E não menos importante falo Inglês, Espanhol e Francês. Se quiser, podemos praticar juntos.
        </HeadListItem>
      </ul>
    </>
  );
};
export const Paragraph2: React.FC = () => {
  return (
    <>
      <p>
        Em 2024 embarquei no desafio de ser Consultor imobiliário na Lopes Gold e estou empolgado com isso.
      </p>

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
