'use client';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";
import * as Ariakit from "@ariakit/react";

export const MenuProvider = styled(Ariakit.MenuProvider)`
    z-index: 1;
`

export const DContent = styled(Ariakit.Menu)`
    z-index: 1;

    min-width: 100%;
    width: 90svw;
    max-width: 350px;

    background-color: white;
    border-radius: 6px;

    padding: 8px;
    padding-block: 16px;

    box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);

    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

    will-change: transform, opacity;
`;

export const DSubTrigger = styled(Ariakit.MenuButton)`
    margin-inline-start: auto;
    cursor: pointer;
    outline-offset: 8px;
    transition: outline-color 300ms;

    &:focus {
        outline: 2px solid var(--teal-60);
        outline-offset: 12px;
    }

    &:hover, &:active {
        color: var(--teal-60);
    }
`;
export const DItem = styled(Ariakit.MenuItem)`
    font-weight: 500;
    background-color: var(--cool-grey-5);


    padding-block: var(--s0) 8px;
    padding-inline: 8px;

    cursor: pointer;

    width: 100%;
    max-width: 500px;

    &:hover, &:focus, &:active {
        outline: 2px solid var(--teal-60);
        outline-offset: 4px;
    }
    
`;

export const DSeparator = styled(DropdownMenu.Separator)`
  height: 2px;
  color: var(--teal-50);
`;


export const DSubContent = styled(DropdownMenu.SubContent)`  

font-weight: 500;
  width: auto;
  max-width: 14ch;
  background-color: white;
  border-radius: 6px;

  padding-inline: 8px;
  padding-block: 16px;

  box-shadow:
    0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;
