import React from "react";
import {
  DecorSectionStyle,
  DecorWrapper,
  Describe,
  Wrapper,
} from "@/components/Main/DecorSection/DecorSection.style";
import CasioKeyboard from "@/components/CasioKeyboard";
import AuthorName from "@/components/AuthorName";

function DecorSection() {
  return (
    <>
      <DecorSectionStyle>
        <DecorWrapper>
          <DecorItem decor={<CasioKeyboard />} />
        </DecorWrapper>
        <Describe>
          Ilustração feita 100% em CSS e HTML por
          <AuthorName
            author="Sarah Fossheim"
            site="https://codepen.io/collection/nwzQJq"
          />
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
