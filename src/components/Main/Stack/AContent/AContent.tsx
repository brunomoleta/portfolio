import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ITechItem } from "@/services/data";

function AContent({ tech }: { tech: Pick<ITechItem, "items"> }) {
  const { items } = tech;
  return (
    <Accordion.Content>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Accordion.Content>
  );
}

export default AContent;
