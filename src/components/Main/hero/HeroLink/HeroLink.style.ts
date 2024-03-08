'use client'
import styled from "styled-components";
import Link from "next/link";

export const ListItem = styled(Link)`
    text-align: center;
    padding: var(--s-4) var(--s1);
    
    border: 2px solid var(--cool-grey-90);
    border-radius: 16px;
    
    font-weight: 700;
    
    width: fit-content;
    
    background-color: var(--cool-grey-5);
    
    -webkit-box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
    -moz-box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
    box-shadow: 4px 4px 12px 0 rgba(172, 241, 200, 0.8);
    
    &:hover {
        border-color: var(--teal-60);
        outline: 1px solid var(--teal-50);
    }

    &:active {
        border-color: var(--teal-60);
    }

    &:focus {
        border-color: var(--teal-60);
    }
`