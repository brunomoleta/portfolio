'use client'
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    
    justify-content: space-between;
    margin-block-start: 6px;
`
export const HeroText = styled.article`
    font-size: var(--font-body-sm-1);
    line-height: 125%;
    max-width: 100%;

    font-weight: 500;

    max-inline-size: var(--max-inline-size);

    @media (min-width: 550px) {
        font-size: var(--font-body-3);
    }
`
export const Emphasis = styled.em`
    font-weight: 600;
    border-block-end: 2.5px solid var(--teal-30);
`

export const HeroParagraph = styled.p`
    margin-block-end: var(--s0);
`