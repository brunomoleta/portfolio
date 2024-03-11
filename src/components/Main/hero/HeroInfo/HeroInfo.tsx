import React from "react";
import {
  heroParagraph1,
  heroParagraph2,
  heroParagraph3,
  heroParagraph4,
} from "@/services/data";
import LinksList from "@/components/Main/hero/LinksList";
import {
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
        <HeroParagraph>{heroParagraph3}</HeroParagraph>
        <HeroParagraph>{heroParagraph4}</HeroParagraph>
      </HeroText>
      <LinksList />
    </Wrapper>
  );
}

export default HeroInfo;
