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

