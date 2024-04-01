"use client";
import styled from "styled-components";

export const HHeading = styled.section`
  padding-block: var(--s1);
  width: 100%;

  display: flex;
  flex-flow: column;

  gap: var(--s2);
  position: relative;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 60% 36%;
    gap: 4%;
  }
`;

export const Name = styled.h1`
  font-size: clamp(var(--font-body-4), 3vw + 1rem, var(--font-heading-4));
  line-height: 120%;
  max-width: 100%;
`;
export const ProjName = styled(Name)`
  margin-block-end: var(--s1);
  border-block-end: 4px solid var(--teal-30);
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
