"use client";
import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";
import Image from "next/image";
export const Trigger = styled(Accordion.Trigger)`
  min-width: 100%;

  display: flex;
  align-items: center;

  outline: unset;
  padding-inline-start: var(--s1);
  padding-block: var(--s-3);
  border-block-end: 3px solid var(--cool-grey-40);
  
  margin-block: var(--s-4);
  
`;

export const TechName = styled.h3`
  font-weight: var(--weight-bold);
  font-size: clamp(1rem, 2svw + 1rem, var(--font-body-4));
  margin-inline-start: var(--s0);
`;
export const TechImage = styled(Image)`
  margin-block: var(--s-1);
`;
