import React from "react";

import {
    AContainer,
    ContentList,
    Item,
} from "@/components/Main/Stack/AContent/AContent.style";
import {ITechItem} from "@/types/types";

function AContent({ tech }: { tech: Pick<ITechItem, "items"> }) {
  const { items } = tech;
  return (
    <AContainer>
      <ContentList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ContentList>
    </AContainer>
  );
}

export default AContent;
