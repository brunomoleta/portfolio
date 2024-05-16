"use client";
import styled from "styled-components";
import Link from "next/link";

export const Author = styled(Link)`
  padding: 0;

  border-bottom: 1.3px solid var(--color-text-third);
  border-radius: 0;

  transition:
    color 800ms,
    border-bottom-color 800ms;

  &:hover {
    transition:
      color 100ms,
      border-bottom-color 200ms;
    color: var(--teal-primary);
    border-bottom-color: transparent;

    outline-color: transparent;
  }
`;
