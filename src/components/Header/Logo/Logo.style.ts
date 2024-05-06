"use client";
import styled from "styled-components";

export const StyledLogo = styled.button`
  color: var(--color-text);

  font-family: inherit;

  line-height: 110%;

  font-size: clamp(var(--font-heading-6), 10svw, var(--font-heading-7));
  font-weight: var(--weight-bold);

  transition: color 300ms;

  text-decoration: none;

  &:hover {
    color: var(--teal-70);
  }
`;
