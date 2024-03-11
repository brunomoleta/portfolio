'use client';
import styled from "styled-components";

export const HeadInfoWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: var(--s0);
`
export const HeadWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: var(--s0);
    width: 100%;
    @media (min-width: 900px) {
        flex-flow: revert;
        gap: var(--s2);
    }
`
export const InfoList = styled.ul`
    width: fit-content;
`

export const Item = styled.li`
    font-size: var(--font-body-sm-2);
    border-block-end: 2px solid var(--teal-20);
    display: grid;
    grid-template-columns: 11ch 1fr;
`
export const WrappedItem = styled(Item)`
    border-block-end: revert;
    display: revert;
`

export const ProjectSpecs = styled.span`
    font-weight: 500;
    margin-inline-start: var(--s-2);
`
export const PItem = styled.h3`
    color: var(--cool-grey-50);
    display: inline;
`

export const About =styled.section`
  color: var(--cool-grey-60);

  margin-block-end: var(--s1);
  margin-inline-end: auto;
  line-height: 130%;
    
    max-inline-size: 50ch;
    
  display: flex;
  flex-flow: column;
  gap:var(--s-1);
  font-size: revert`
