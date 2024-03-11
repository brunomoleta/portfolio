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
        <HeroParagraph>{heroParagraph1}</HeroParagraph>
        <HeroParagraph>{heroParagraph2}</HeroParagraph>
        <HeroParagraph>
          {heroParagraph3} <Emphasis>{ingredients}</Emphasis>
        </HeroParagraph>
        <HeroParagraph>
          {heroParagraph4} <Emphasis>{heroParagraph5}</Emphasis>
        </HeroParagraph>
      </HeroText>
      <LinksList />
    </Wrapper>
  );
}

export default HeroInfo;
