'use client';
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: var(--desktop-width);
    margin: auto;

    padding-inline: var(--page-alignment);
    margin-block: var(--s1);

    display: flex;
    flex-flow: column;
    gap: var(--s3);
`

export const FixedContainer = styled(Container)`
    display: flex;
    flex-flow: revert;
    justify-content: space-between;
    align-items: center;
`

export const MainStyles = styled.main`
    width: 100%;
`
