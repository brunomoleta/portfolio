import React from "react";
import LinksList from "@/components/Main/hero/LinksList";
import { Wrapper } from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import TextHero from "@/components/Main/hero/HeroInfo/TextHero";

function HeroInfo() {
  return (
    <Wrapper>
      <TextHero />
      <LinksList />
    </Wrapper>
  );
}

export default HeroInfo;
