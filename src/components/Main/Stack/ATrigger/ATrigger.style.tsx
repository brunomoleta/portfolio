"use client"
import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";
import Image from "next/image";
export const Trigger = styled(Accordion.Trigger)`
    min-width: 100%;
    
    display: flex;
    align-items: center;
    

    border-block-end: 2px solid var(--cool-grey-40);
    
    transition: rotate 300ms;
    &[data-state="open"]> svg{
        transform: rotate(45deg);
    }
`

export const TechName = styled.h3`
    font-weight: 700;
    font-size: clamp(var(--font-body-1, 2svw, var(--font-body-3)));
    margin-inline-start: var(--s0);
    
`
export const TechImage = styled(Image)`
    margin-block: var(--s-1);
`


