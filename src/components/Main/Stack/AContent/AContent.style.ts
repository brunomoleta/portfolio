import styled from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";
export const AContainer = styled(Accordion.Content)`
    border-block-end: 2px solid var(--cool-grey-40);
`
export const ContentList = styled.ul`
    margin-block: var(--s1);
    margin-inline: var(--s3) 0;
    
    display: grid;
    gap: var(--s0);
`

export const Item = styled.li`
    list-style: revert;
`