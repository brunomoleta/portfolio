"use client";
import styled from "styled-components";

export const HLinks = styled.ul`
  width: fit-content;
  margin-inline-start: auto;
  display: flex;
  flex-wrap: wrap;
  gap: var(--s1);
  font-weight: 500;

  @media (max-width: 850px) {
    gap: var(--s0);
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
