'use client';
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: var(--desktop-width);
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline:clamp(var(--s-1), 5svw, var(--s4));
`