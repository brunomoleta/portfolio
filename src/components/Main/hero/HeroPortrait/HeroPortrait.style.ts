'use client'
import styled from "styled-components";
import Image from "next/image";
import {motion} from "framer-motion";

export const Portrait = styled(motion(Image))`
    width: 500px;
    height: auto;
    
    opacity: .9;
    
    border-radius: var(--s-1);
    
    margin-block-start: var(--s0);
`