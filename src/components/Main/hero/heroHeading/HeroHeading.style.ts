"use client";
import styled from "styled-components";

export const HHeading = styled.section`
    padding-block: var(--s1);
    font-weight: 700;
    width: 100%;

    display: flex;
    flex-flow: column;

    gap: var(--s2);

    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 48% 48%;
        gap: 4%;
    }

`;

export const Name = styled.h1`
    font-size: var(--font-body-1);
    line-height: 120%;
    max-width: 100%;
    @media (min-width: 550px) {
        font-size: var(--font-heading-4);
    }
`
export const ProjName = styled(Name)`
  margin-block-end: var(--s1);
    border-block-end: 4px solid var(--teal-30);
`

export const SubName = styled.h1`
    font-size: var(--font-body-3);
    line-height: 120%;
    min-width: 100%;
    
    margin-block-end: var(--s1);
    border-block-end: 3px solid var(--teal-50);
    @media (min-width: 550px) {
        font-size: var(--font-body-2);
    }
`
export const OtherName = styled.h3`
    font-size: var(--font-body-4);
    line-height: 120%;
    width: fit-content;
    border-block-end: 3px solid var(--teal-50);
    @media (min-width: 550px) {
        font-size: var(--font-body-3);
    }
`

