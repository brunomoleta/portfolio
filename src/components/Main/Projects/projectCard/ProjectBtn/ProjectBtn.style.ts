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
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--font-body-sm-1);

  color: var(--teal-primary);

  word-break: break-word;

  border-radius: unset;
  border: 2px solid transparent;
  border-block-end: 2px solid transparent;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3.2px;
    background: var(--gradient);
  }
  &:hover::after {
    opacity: 0;
  }

  &:hover {
    outline: revert;
    color: var(--teal-hover);
    text-decoration: none;
    border-bottom-color: transparent;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: color 800ms ease-out;

    &::after {
      transition: opacity 800ms ease-out;
    }
    &:hover::after {
      transition: opacity 300ms ease-in;
    }

    &:hover {
      transition:
        color 300ms ease-in,
        opacity 300ms ease-in;
    }
  }

  &:hover {
    border: 2px solid transparent;
    border-block-end: 2px solid var(--color-background);
  }

  &:focus {
    border: 2px solid transparent;
    border-block-end: 2px solid var(--color-background);
    color: var(--color-text);
  }
`;

export const PButton = styled(Btn)`
  font-size: var(--font-body-4);
`;
