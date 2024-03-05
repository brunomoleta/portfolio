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
        <Wrapper>
          <BraunWatch />
        </Wrapper>

        <Wrapper>
          <CasioKeyboard />
        </Wrapper>
      </DecorSectionStyle>
    </>
  );
}

export default DecorSection;
