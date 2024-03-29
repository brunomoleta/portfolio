"use client";
import styled from "styled-components";
import Link from "next/link";

export const ProjBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--s-1);
  font-size: var(--font-body-sm-1);

  color: var(--teal-60);
  transition: color 300ms;

  word-break: break-word;

  text-decoration: underline;
  &:hover {
    outline: revert;
    color: var(--teal-90);
  }
`;

export const PButton = styled(ProjBtn)`
  position: absolute;
  bottom: 0;
`;
