"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;

    align-items: center;
    color: var(--cool-grey-60);
    gap: var(--s0);

    margin-block-end: var(--s-1);
`;
export const Heading = styled.h2``;

export const StackHeader = styled.div`
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--s0)
`
export const StackSection = styled.section`
    min-width: 100%;

    display: flex;
    flex-flow: column;
`;
