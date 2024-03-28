"use client";
import React from "react";
import Balancer from "react-wrap-balancer";
import styled from "styled-components";
import { OtherName } from "@/components/Main/hero/heroHeading/HeroHeading.style";

function JustifyParagraph({ text, title }: { text: string; title: string }) {
  return (
    <Wrapper>
      <OtherName>{title}</OtherName>

      <Balancer>
        <Text>{text}</Text>
      </Balancer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;

  gap: var(--s0);
`;

const Text = styled.p`
  margin-block-end: var(--s-2);
`;

export default JustifyParagraph;
