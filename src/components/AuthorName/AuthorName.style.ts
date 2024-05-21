"use client";
import styled from "styled-components";
import Link from "next/link";

export const Author = styled(Link)`
  --width: 1.3px;
    padding: 0;

  border: 2px solid transparent;
  border-bottom: var(--width) solid var(--color-text-third);
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

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
        &:hover {
            transition: color 100ms,
            border-bottom-color 200ms;
            border: 2px solid transparent;
            border-block-end: var(--width) solid var(--color-background);
        }
        &:focus {
            border: 2px solid transparent;
            border-block-end: var(--width) solid transparent;
            color: var(--teal-primary);
        }
    }
`;
