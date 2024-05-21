"use client";
import styled from "styled-components";
import { Menu, MenuButton, MenuItem, MenuProvider } from "@ariakit/react";

export const DSubTrigger = styled(MenuButton)`
  margin-inline-start: auto;
  cursor: pointer;
  outline-offset: 8px;
  min-width: 32px;
  width: 32px;

  &:focus {
    outline: 2px solid var(--teal-60);
    outline-offset: 12px;
  }

  &:hover,
  &:active {
    color: var(--teal-60);
  }

  @media (min-width: 550px) {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: color 300ms;
  }
`;
export const OverlayDiv = styled.div`
  position: fixed;
  inset: 0;
  width: 100svw;
  height: 100svh;
`

export const DContent = styled(Menu)`
    z-index: 1;
    height: 75svh;
    min-width: 100%;
    width: 90svw;
    max-width: 350px;

    background-color: white;
    border-radius: 6px;

    padding: 8px;
    padding-block: 16px;
    margin-block-start: var(--s1);

    box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);

    opacity: 0;

    &[aria-expanded="true"], &[data-open] {
        opacity: 1;
    }

    @media (prefers-reduced-motion: no-preference) {
        transition: opacity 800ms ease-in;
    &[aria-expanded="true"], &[data-open] {
        opacity: 1;
        transition: opacity 800ms ease-in;
    }
`;

export const DItem = styled(MenuItem)`
  font-weight: var(--weight-medium);
  background-color: var(--cool-grey-5);

  padding-block: var(--s0) 8px;
  padding-inline: 8px;

  cursor: pointer;

  width: 100%;
  max-width: 500px;

  &:hover,
  &:focus,
  &:active {
    outline: 3px solid var(--teal-60);
    outline-offset: 4px;
  }
`;

export const MenuDropdown = styled(MenuProvider)``;
