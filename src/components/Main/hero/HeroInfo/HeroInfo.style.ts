"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
  margin-block-start: 6px;
`;
export const HeroText = styled.article`
  font-size: var(--font-body-sm-1);
  line-height: 125%;
  max-width: 100%;

  max-inline-size: var(--max-inline-size);

  @media (min-width: 550px) {
    font-size: var(--font-body-3);
  }
`;
export const Emphasis = styled.em`
  font-weight: var(--weight-semibold);
  text-decoration: underline;
  text-decoration-color: var(--teal-30);
  text-decoration-thickness: 2.5px;
`;

export const Paragraph = styled.p`
  margin-block-end: var(--s1);
  text-align: justify;
`;
