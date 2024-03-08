'use client'
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: var(--s2);
    flex-flow: column;
    
    margin-block-start: 6px;
`
export const HeroText = styled.p`
    font-size: clamp(var(--font-heading-7), 20svw, var(--font-body-4));
    line-height: 130%;
    max-width: 100%;
    
    max-inline-size: var(--max-inline-size);
`