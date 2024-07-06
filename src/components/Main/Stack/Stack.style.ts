"use client";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: var(--s-2);
`;

export const Describe = styled.small`
  color: var(--color-text-third);

  margin-block-end: var(--s1);
  margin-inline-end: auto;
  font-size: var(--font-body-sm-2);
  line-height: 130%;

  display: flex;
  flex-flow: column;
  gap: var(--s-1);
`;

type HeadingProps = {
  isBlack?: boolean;
};
export const Heading = styled.h2<HeadingProps>`
  font-weight: var(--weight-normal);
  color: ${(props) =>
    props.isBlack ? "var(--color-text)" : "var(--color-text-secondary)"};
  font-size: clamp(var(--font-body-4), 4svw + 1rem, var(--font-body-sm-1));
  line-height: 120%;
  letter-spacing: ${(props) => (props.isBlack ? "inherit" : "1px")};

  width: fit-content;
`;

export const StackHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--s0);

  margin-block-end: var(--s0);
  margin-inline-end: auto;
`;
