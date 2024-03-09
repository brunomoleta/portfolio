'use client';
import styled from "styled-components";
import Link from "next/link";

export const ProjBtn = styled(Link)`
    display: flex;
    align-items: center;
    gap: var(--s-1);
    font-size: var(--font-body-sm-1);
    
    color: var(--teal-60);
    text-decoration: underline;
    transition: color 300ms;
    
    word-break: break-all;
    line-break: anywhere;
    
    
    &:hover {
        outline: revert;
        color: var(--teal-90);
    }
`