"use client";
import styled from "styled-components";
import Link from "next/link";

export const ListItem = styled(Link)`
    --outer: var(--s0);
    --padding: var(--s-3);
    --inner: calc(var(--outer) - var(--padding));
    
    border: 2px solid transparent;
    border-radius: var(--outer);
    margin:0;
    
    display: grid;
    
    font-weight: var(--weight-bold);


    background-color: var(--color-background);

    -webkit-box-shadow: inset 2px 2px 4px hsl(0deg 0% 0% / 0.33);
    -moz-box-shadow: inset 2px 2px 4px hsl(0deg 0% 0% / 0.33);
    box-shadow: inset 2px 2px 4px hsl(0deg 0% 0% / 0.33);

    overflow: hidden;

    
    &:hover {
        background-color: var(--color-line);
        
        outline-color: var(--teal-primary);
        color: var(--teal-80);
        
        border: 2px solid transparent;

        -webkit-box-shadow: inset 2px 2px 4px var(--teal-primary);
        -moz-box-shadow: inset 2px 2px 4px var(--teal-primary);
        box-shadow: inset 2px 2px 4px var(--teal-primary);
    }

    &:active {
        border: 2px solid var(--teal-60);
    }

    &:focus {
        border: 2px solid var(--teal-60);
    }

    @media (prefers-reduced-motion: no-preference) {
        transition: color 400ms,
        background-color 500ms,
        border 600ms;
        &:hover {
            transition: color 200ms ease-in-out,
            background-color 250ms ease-in-out,
            border 300ms ease-out;
            &>div{
                transition: background-color 500ms ease-in-out;
            }
        }
    }
    
    &>div{ 
    transition: background-color 300ms ease-in;
    box-shadow:
            2px 2px 8px
            var(--teal-hover);
    //background: inherit;
    border-radius: var(--inner);
    padding: var(--s-3) var(--s0);
            background-color: inherit;
        &:hover {
            background-color: var(--button-hover);
        }
    }
`;

