"use client";
import styled from "styled-components";

export const HHeading = styled.div`
    padding-block: var(--s1);
    font-weight: 700;
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;

    gap: var(--s0);
`;

export const Name = styled.h1`
    font-size: clamp(var(--font-heading-4), 5svw, var(--font-heading-7));
    line-height: 120%;
    max-width: 100%;
`

export const HeroText = styled.p`
    font-size: clamp(var(--font-heading-7), 20svw, var(--font-body-4));
    line-height: 130%;
    max-width: 100%;
    
    max-inline-size: 50ch;
`