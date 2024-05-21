"use client";
import styled from "styled-components";
import Link from "next/link";

export const ProjBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--font-body-sm-1);

  color: var(--teal-primary);

  word-break: break-word;

  &:hover {
    outline: revert;
    color: var(--teal-hover);
    text-decoration: none;
    border-color: transparent;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: color 400ms ease-out;
    border-color: transparent;
    &:hover {
      transition: color 150ms ease-in;
    }
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--font-body-sm-1);

  color: var(--teal-primary);

  word-break: break-word;

  border-radius: unset;
  border: 2px solid transparent;
  border-block-end: 2px solid var(--teal-primary);

  &:hover {
    outline: revert;
    color: var(--teal-hover);
    text-decoration: none;
    border-bottom-color: transparent;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      color 300ms,
      border-bottom-color 1600ms;
  }
`;

export const PButton = styled(Btn)`
  font-size: var(--font-body-4);

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      border: 2px solid transparent;
      border-block-end: 2px solid var(--color-background);
    }

    &:focus {
      border: 2px solid transparent;
      border-block-end: 2px solid var(--color-background);
      color: var(--color-text);
    }
  }
`;
