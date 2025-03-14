"use client";
import styled from "styled-components";

export const HHeading = styled.section`
  padding-block: var(--s1) var(--s3);
  width: 100%;

  display: flex;
  flex-flow: column;

  gap: var(--s2);
  position: relative;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: minmax(40ch, 1fr) auto;
    gap: 4%;
    justify-items: start;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -18px;
    height: 18px;
    background: var(--gradient-teal-70-invert);

    opacity: 0.7;
    transition: opacity 800ms ease-in;
  }
`;

export const Name = styled.h1`
  font-size: clamp(var(--font-body-4), 3vw + 1rem, var(--font-heading-4));
  line-height: 120%;
  max-width: fit-content;
  display: grid;
  grid-template-columns: auto;
  font-weight: 700;
`;
export const Dev = styled.h2`
  font-size: clamp(var(--font-body-sm-1), 3vw + 1rem, var(--font-heading-6));
  line-height: 120%;
  max-width: fit-content;
  display: grid;
  grid-template-columns: auto;
  font-weight: 600;
`;

export const ProjName = styled(Name)`
  margin-block-end: var(--s1);

  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6px;
    background: var(--gradient-teal-50);
`;

export const SubName = styled.h1`
  font-size: clamp(var(--font-body-3), 4svw + 1rem, var(--font-body-1));
  line-height: 120%;
  min-width: 100%;

  margin-block-end: var(--s1);
  border-block-end: 3px solid var(--teal-50);
`;
export const OtherName = styled.h3`
  font-size: clamp(var(--font-body-4), 6svw + 1rem, var(--font-body-2));
  line-height: 120%;
  width: fit-content;
  border-block-end: 3px solid var(--teal-50);
`;
