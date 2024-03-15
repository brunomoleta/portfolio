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
          graduação em arquitetura e urbanismo, passagem pelo universo de
          startups e formação em desenvolvimento web full stack pela Kenzie
          Academy Brasil.
        </HeroParagraph>
        <HeroParagraph>
          O que mais gosto em ser dev é o fato de que você está sempre{" "}
          <Emphasis>absorvendo coisas novas</Emphasis>, tanto através de outras pessoas
          quanto dos seus erros ao codar. Além disso considero
          pontos fortes em minha trajetória a{" "}
          <Emphasis>capacidade de comunicação e a iniciativa</Emphasis>.
        </HeroParagraph>

        <HeroParagraph>
          Desta forma, ao desenvolver aplicações web através de{" "}
          <Emphasis>Next.js, Node.js, Typescript e CSS</Emphasis>, alio
          habilidades comportamentais e técnicas para fazer a{" "}
          <Emphasis>experiência do usuário</Emphasis> fluida como um{" "}
          <Emphasis> rio de águas vivas</Emphasis> e ligeira como um{" "}
          <Emphasis>drible do Vinícius Jr.</Emphasis>
        </HeroParagraph>
      </HeroText>
      <LinksList />
    </Wrapper>
  );
}

export default HeroInfo;
