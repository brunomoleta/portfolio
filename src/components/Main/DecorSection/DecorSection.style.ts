'use client'
import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 100%;
    background-color: var(--cool-grey-5);
    height: 160px;
    overflow: hidden;
    display: flex;
    
    border-radius: var(--s0);
    
    position: relative;

    box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
    
    
`

export const DecorSectionStyle = styled.section`
    min-width: 100%;
    display: flex;
    flex-flow: column;
    gap: var(--s-1);
    
`
//https://codepen.io/fossheim/pen/jObGxQQ