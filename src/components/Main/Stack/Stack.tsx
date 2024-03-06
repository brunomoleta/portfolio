"use client";
import * as Accordion from "@radix-ui/react-accordion";
import ATrigger from "@/components/Main/Stack/ATrigger";
import AContent from "@/components/Main/Stack/AContent";
import { ITechItem } from "@/services/data";

export const Stack = ({ techList }: { techList: ITechItem[] }) => {
  return (
    <Accordion.Root type="single" defaultValue={techList[0].name} collapsible>
      {techList.map((tech, index) => (
        <Accordion.Item key={index} value={tech.name}>
          <ATrigger tech={tech} />
          <AContent tech={tech} />
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default Stack;
