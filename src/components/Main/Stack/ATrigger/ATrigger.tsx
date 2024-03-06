import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import {ITechItem} from "@/services/data";

function ATrigger({
  tech,
}: {
  tech: Omit<ITechItem
      , 'items'>
}){
  const { logoImage, name } = tech;
  return (
    <Accordion.Trigger>
      {logoImage}
      {name}
      <ChevronDownIcon />
    </Accordion.Trigger>
  );
}

export default ATrigger;
