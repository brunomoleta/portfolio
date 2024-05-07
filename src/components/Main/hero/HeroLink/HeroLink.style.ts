"use client";
import styled from "styled-components";
import Link from "next/link";

export const ListItem = styled(Link)`
  text-align: center;
  padding: var(--s-4) var(--s1);

  border: 2px solid var(--cool-grey-90);
  border-radius: 16px;

  font-weight: var(--weight-bold);

  width: fit-content;

  background-color: var(--color-background);

  -webkit-box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
  -moz-box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
  box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);

  transition: color 300ms;

  &:hover {
    background-color: var(--button-hover);
    border-color: var(--teal-60);
    color: var(--teal-80);
  }

  &:active {
    border-color: var(--teal-60);
  }

  &:focus {
    border-color: var(--teal-60);
  }
`;
