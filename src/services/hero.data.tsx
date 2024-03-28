import { Emphasis } from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import React from "react";

export const Paragraph1: React.FC = () => {
  return (
    <>
      Sou um profissional{" "}
      <Emphasis>multidisciplinar, versátil e dinâmico</Emphasis>, com graduação
      em arquitetura e urbanismo, passagem pelo universo de startups e formação
      em desenvolvimento web full stack pela Kenzie Academy Brasil.
    </>
  );
};
export const Paragraph2: React.FC = () => {
  return (
    <>
      O que mais gosto em ser dev é o fato de que você está sempre{" "}
      <Emphasis>absorvendo coisas novas</Emphasis>, tanto através de outras
      pessoas quanto dos seus erros ao codar. Além disso considero pontos fortes
      em minha trajetória a{" "}
      <Emphasis>capacidade de comunicação e a iniciativa</Emphasis>.
    </>
  );
};

export const Paragraph3: React.FC = () => {
  return (
    <>
      Desta forma, ao desenvolver aplicações web através de{" "}
      <Emphasis>Next.js, Node.js, Typescript e CSS</Emphasis>, alio habilidades
      comportamentais e técnicas para fazer a{" "}
      <Emphasis>experiência do usuário</Emphasis> fluida como um{" "}
      <Emphasis> rio de águas vivas</Emphasis> e ligeira como um{" "}
      <Emphasis>drible do Vinícius Jr.</Emphasis>
    </>
  );
};
