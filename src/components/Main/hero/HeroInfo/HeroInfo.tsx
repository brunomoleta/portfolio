import React from "react";
import {
  heroParagraph1,
  heroParagraph2,
  heroParagraph3,
  heroParagraph4,
  heroParagraph5,
  ingredients,
} from "@/services/data";
import LinksList from "@/components/Main/hero/LinksList";
import {
  Emphasis,
  HeroParagraph,
  HeroText,
  Wrapper,
} from "@/components/Main/hero/HeroInfo/HeroInfo.style";

function HeroInfo() {
  return (
    <Wrapper>
      <HeroText>
        <HeroParagraph>
          Sou um profissional{" "}
          <Emphasis>multidisciplinar, versátil e dinâmico</Emphasis>, com
          graduação em arquitetura, passagem pelo universo de startups e
          formação em desenvolvimento web full stack pela Kenzie Academy Brasil.
        </HeroParagraph>
        <HeroParagraph>
          Pratico o <Emphasis>aprendizado contínuo</Emphasis> e, como
          desenvolvedor tenho o privilégio de fazer parte da evolução do mercado
          e da vida das pessoas através da tecnologia.
        </HeroParagraph>
        <HeroParagraph>
          {heroParagraph3} <Emphasis>{ingredients}</Emphasis>
        </HeroParagraph>
        <HeroParagraph>
          Desta forma, ao desenvolver aplicações web através de{" "}
          <Emphasis>Next.js, Node.js, Typescript e CSS</Emphasis>, alio
          habilidades comportamentais e técnicas para criar soluções escaláveis
          e que façam a <Emphasis>experiência do usuário</Emphasis> fluida como
          um <Emphasis> rio</Emphasis> e ligeira como um{" "}
          <Emphasis>drible do Vinícius Jr.</Emphasis>
        </HeroParagraph>
      </HeroText>
      <LinksList />
    </Wrapper>
  );
}

export default HeroInfo;
