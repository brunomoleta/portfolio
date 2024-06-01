"use client";
import styled from "styled-components";

export const StyledLogo = styled.button`
  color: var(--color-text);

  padding: var(--s-2) var(--s1) var(--s-2) 0;

  font-family: inherit;

  line-height: 110%;

  font-size: clamp(var(--font-heading-6), 10svw, var(--font-heading-7));
  font-weight: var(--weight-bold);

  text-decoration: none;

  &:hover {
    color: var(--teal-hover);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      color 500ms ease-in,
      border-color 500ms ease-in;
  }
  &:hover {
    transition:
      color 200ms ease-in,
      border-color 200ms ease-in;
  }
`;
