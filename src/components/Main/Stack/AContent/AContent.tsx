import React from "react";

import {
  AContainer,
  ContentList,
  Item,
} from "@/components/Main/Stack/AContent/AContent.style";
import { ITechItem } from "@/types/types";
import Balancer from "react-wrap-balancer";

function AContent({ tech }: { tech: Pick<ITechItem, "items"> }) {
  const { items } = tech;
  return (
    <AContainer>
      <ContentList>
        {items.map((item, index) => (
          <Balancer ratio={0} key={index}>
            <Item>{item}</Item>
          </Balancer>
        ))}
      </ContentList>
    </AContainer>
  );
}

export default AContent;
