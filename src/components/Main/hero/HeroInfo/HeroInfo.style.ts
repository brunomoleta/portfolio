"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
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
  position: relative;
  width: fit-content;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
    height: 3px;
    background: var(--gradient);
  }
`;
export const Emoji = styled.span``;

export const Paragraph = styled.div`
  margin-block-end: var(--s1);
  text-align: justify;
`;

export const HeadListItem = styled.li`
  margin-block-end: var(--s0);
`;
