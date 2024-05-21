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
  transition: color 600ms ease-in,border-color 600ms ease-out;
    

  &:hover,&:focus {
    color: orangered;
    transition: color 200ms ease-in,border-color 200ms ease-in;
  }
`;
