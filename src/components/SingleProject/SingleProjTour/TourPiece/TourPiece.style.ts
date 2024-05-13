"use client";
import styled from "styled-components";

export const Piece = styled.div`
  font-size: var(--font-body-sm-1);
  display: grid;
  padding-block: var(--s0) var(--s-5);
  background-color: var(--color-background);

  @media (min-width: 1050px) {
    grid-template-columns: 20svw auto;
    gap: var(--s1);
  }
`;
