"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import ATrigger from "@/components/Main/Stack/ATrigger";
import AContent from "@/components/Main/Stack/AContent";
import {ITechItem} from "@/types/types";


function AccordionFull({ techList }: { techList: ITechItem[] }) {
  return (
    <Accordion.Root
      style={{ width: "100%" }}
      type="single"
      defaultValue={techList[0].name}
      collapsible
    >
      {techList.map((tech, index) => (
        <Accordion.Item key={index} value={tech.name}>
          <ATrigger tech={tech} />
          <AContent tech={tech} />
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default AccordionFull;
