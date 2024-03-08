import React from "react";
import {
  DecorSectionStyle,
  Wrapper,
} from "@/components/Main/DecorSection/DecorSection.style";
import BraunWatch from "@/components/BraunWatch";
import CasioKeyboard from "@/components/CasioKeyboard";

function DecorSection() {
  return (
    <>
      <DecorSectionStyle>
        <DecorItem decor={<BraunWatch />} />
        <DecorItem decor={<CasioKeyboard />} />
      </DecorSectionStyle>
    </>
  );
}

export default DecorSection;

interface DecorSectionProps {
  decor: React.ReactNode;
}

const DecorItem: React.FC<DecorSectionProps> = ({ decor }) => {
  return (
    <>
      <Wrapper>{decor}</Wrapper>
    </>
  );
};
