import React from "react";
import { Heading, StackHeader } from "@/components/Main/Stack/Stack.style";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function SectionHeader({ word }: { word: string }) {
  return (
    <StackHeader>
      <ArrowRightIcon style={{ color: "var(--cool-grey-60)" }} />
      <Heading>{word.toUpperCase()}</Heading>
    </StackHeader>
  );
}

export default SectionHeader;
