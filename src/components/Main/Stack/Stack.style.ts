"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;

    align-items: center;

    margin-block-end: var(--s-1);
`;
export const Heading = styled.h3`
    font-weight: normal;
    color: var(--cool-grey-50);
`;

export const StackHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--s0);

    margin-block-end: var(--s0);
    margin-inline-end: auto;
`
export const StackSection = styled.section`
    min-width: 100%;

    display: flex;
    flex-flow: column;

    margin-block-start: var(--s2);
`;
