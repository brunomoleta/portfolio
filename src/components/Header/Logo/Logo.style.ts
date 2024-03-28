"use client";
import Link from "next/link";
import styled from "styled-components";

export const StyledLogo = styled(Link)`
  font-family: inherit;

  line-height: 110%;

  font-size: clamp(var(--font-heading-6), 10svw, var(--font-heading-7));
  font-weight: 700;

  transition: color 300ms;

  text-decoration: none;

  &:hover {
    color: var(--teal-70);
  }

  &:active {
    color: var(--teal-70);
  }

  &:focus {
    color: var(--teal-70);
  }
`;
