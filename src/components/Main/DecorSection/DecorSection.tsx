import React from "react";
import {
  DecorSectionStyle,
  DecorWrapper,
  Describe,
  Wrapper,
} from "@/components/Main/DecorSection/DecorSection.style";
import BraunWatch from "@/components/BraunWatch";
import CasioKeyboard from "@/components/CasioKeyboard";
import Link from "next/link";

function DecorSection() {
  return (
    <>
      <DecorSectionStyle>
        <DecorWrapper>
          <DecorItem decor={<BraunWatch />} />
          <DecorItem decor={<CasioKeyboard />} />
        </DecorWrapper>
        <Describe>
          Ilustrações feitas 100% em CSS e HTML por{" "}
          <Link
            style={{ textDecoration: "underline" }}
            target="_blank"
            href={"https://codepen.io/collection/nwzQJq"}
          >
            Sarah Fossheim.
          </Link>
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
