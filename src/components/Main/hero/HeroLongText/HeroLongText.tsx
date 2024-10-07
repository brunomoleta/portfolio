import React from "react";
import {
  Dev,
  Name,
} from "@/components/Main/hero/heroHeading/HeroHeading.style.ts";
import { heroHeading1 } from "@/services/data.tsx";
import HeroInfo from "@/components/Main/hero/HeroInfo";
import { Wrapper } from "@/components/Main/hero/HeroInfo/HeroInfo.style.ts";

function HeroLongText() {
  return (
    <Wrapper>
      <Name>{heroHeading1}</Name>
      <Dev style={{marginBlockEnd: "var(--s2)"}}>
        Arquiteto e Consultor&nbsp;imobiliário
      </Dev>
      <HeroInfo />
    </Wrapper>
  );
}

export default HeroLongText;
