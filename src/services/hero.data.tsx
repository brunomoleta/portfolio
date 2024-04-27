import { Emphasis } from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import React from "react";

export const Paragraph1: React.FC = () => {
  return (
    <>
      Que bom que você chegou até aqui, fico feliz com a sua visita,{" "}
      <Emphasis>seja muito bem-vinda(o) :)</Emphasis>
    </>
  );
};
export const Paragraph2: React.FC = () => {
  return (
    <>
      Acredito ser um profissional multidisciplinar, cujos temperos principais
      são: <Emphasis>comunicação e autonomia</Emphasis>. Me graduei arquiteto em
      universidade pública com experiência na área, fiz parte de uma incubadora
      de startups e absorvi habilidades em programação full stack na Kenzie
      Academy Brasil.
    </>
  );
};

export const Paragraph3: React.FC = () => {
  return (
    <>
      Desta forma, ao desenvolver aplicações web através de{" "}
      <Emphasis>Next.js, Node.js, Typescript e CSS</Emphasis>, alio habilidades
      comportamentais e técnicas para fazer a{" "}
      <Emphasis>experiência do usuário</Emphasis> natural como um{" "}
      <Emphasis> rio de águas vivas</Emphasis> e ligeira como um{" "}
      <Emphasis>drible do Vinícius Jr.</Emphasis>
    </>
  );
};
