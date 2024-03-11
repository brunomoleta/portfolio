import React from "react";
import { Heading, StackHeader } from "@/components/Main/Stack/Stack.style";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function SectionHeader({
  word,
  changeH,
  isBlack,
}: {
  isBlack?: boolean;
  word: string;
  changeH?: string;
}) {
  return (
    <StackHeader>
      <ArrowRightIcon style={{ color: "var(--cool-grey-60)" }} />
      <Heading isBlack={isBlack} as={changeH}>{word.toUpperCase()}</Heading>
    </StackHeader>
  );
}

export default SectionHeader;
