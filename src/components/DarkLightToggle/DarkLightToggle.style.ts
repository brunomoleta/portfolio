"use client";
import styled from "styled-components";

export const ThemeButton = styled.button`
  height: 100%;

  padding-inline: var(--s0);
  padding-block: var(--s1);

  display: grid;
  place-content: center;
  margin: auto;

  color: var(--color-text);
  transition: color 500ms ease-in;

  &:hover {
    color: orangered;
    transition: color 200ms ease-in;
  }
  &:focus {
    color: orangered;
    transition: color 200ms ease-in;
  }
`;
