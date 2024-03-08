import React from "react";
import { heroParagraph } from "@/services/data";
import LinksList from "@/components/Main/hero/LinksList";
import {HeroText, Wrapper} from "@/components/Main/hero/HeroInfo/HeroInfo.style";

function HeroInfo() {
  return (
    <Wrapper>
      <HeroText>{heroParagraph}</HeroText>
      <LinksList />
    </Wrapper>
  );
}

export default HeroInfo;
