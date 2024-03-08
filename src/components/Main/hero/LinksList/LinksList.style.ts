"use client";
import styled from "styled-components";

export const LinksListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-1);
`;

export const ProjList = styled(LinksListStyle)`
    justify-content: space-around;
    gap: var(--s2);
`