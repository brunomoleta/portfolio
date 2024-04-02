"use client";
import styled from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";
export const AContainer = styled(Accordion.Content)`
  border-block-end: 2px solid var(--cool-grey-40);
`;
export const ContentList = styled.ul`
  padding-block: var(--s1);
  margin-inline: var(--s0) 0;

  display: grid;
  gap: var(--s0);

  @media (min-width: 900px) {
    width: fit-content;
  }
`;

export const Item = styled.li`
  list-style: revert;
`;
