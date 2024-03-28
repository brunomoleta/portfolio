import React from "react";
import { Paragraph } from "@/components/Main/hero/HeroInfo/HeroInfo.style";
import Balancer from "react-wrap-balancer";
import { ChildrenProps } from "@/types/types";

function HeroParagraph({ children }: ChildrenProps) {
  return (
    <Paragraph>
      <Balancer ratio={0}>{children}</Balancer>
    </Paragraph>
  );
}

export default HeroParagraph;
