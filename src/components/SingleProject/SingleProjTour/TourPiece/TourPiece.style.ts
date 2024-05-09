"use client";
import styled from "styled-components";

export const Piece = styled.div`
  font-size: var(--font-body-sm-1);

    @media (min-width: 1050px) {
        display: grid;
        grid-template-columns: 20svw auto;
        gap: var(--s1);
    }
`;
