import React from "react";
import {
  DecorSectionStyle,
  DecorWrapper,
  Describe,
  Wrapper,
} from "@/components/Main/DecorSection/DecorSection.style";
import BraunWatch from "@/components/BraunWatch";
import CasioKeyboard from "@/components/CasioKeyboard";

function DecorSection() {
  return (
    <>
      <DecorSectionStyle>
        <DecorWrapper>
          <DecorItem decor={<BraunWatch />} />
          <DecorItem decor={<CasioKeyboard />} />
        </DecorWrapper>
        <Describe>
          Ilustrações feitas 100% em CSS e HTML por Sarah Fossheim.
        </Describe>
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
