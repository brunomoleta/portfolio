"use client";
import styled from "styled-components";
import Link from "next/link";

export const ProjBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--font-body-sm-1);

  color: var(--teal-primary);
  transition: color 300ms;

  word-break: break-word;

  &:hover {
    outline: revert;
    color: var(--teal-hover);
    text-decoration: none;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--font-body-sm-1);

  color: var(--teal-primary);

  word-break: break-word;

  transition:
    color 300ms,
    border-bottom-color 300ms;
  border-radius: unset;

  border-block-end: 2px solid var(--teal-primary);
  &:hover {
    outline: revert;
    color: var(--teal-hover);
    text-decoration: none;
    border-bottom-color: transparent;
  }
`;

export const PButton = styled(Btn)`
  font-size: var(--font-body-4);
`;
