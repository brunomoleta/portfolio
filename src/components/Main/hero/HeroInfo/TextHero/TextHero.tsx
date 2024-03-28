import React from "react";
import {
  HeroText,
} from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import HeroParagraph from "@/components/Main/hero/HeroParagraph";
import { Paragraph1, Paragraph2, Paragraph3 } from "@/services/hero.data";

function TextHero() {
  return (
    <HeroText>
      <HeroParagraph>
        <Paragraph1 />
      </HeroParagraph>
      <HeroParagraph>
        <Paragraph2 />
      </HeroParagraph>
      <HeroParagraph>
        <Paragraph3 />
      </HeroParagraph>
    </HeroText>
  );
}

export default TextHero;
