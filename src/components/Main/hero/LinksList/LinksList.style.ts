"use client";
import styled from "styled-components";

export const LinksListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-1);
`;

export const ProjList = styled(LinksListStyle)`
  gap: var(--s2);
  display: grid;
  @media (min-width: 32rem) {
    grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  }
`;

export const WholeContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  height: fit-content;
  padding-block-start: var(--s-1);
`;
