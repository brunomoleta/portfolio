'use client'
import styled from "styled-components";
import Image from "next/image";

export const ProjectArticle = styled
.article`
    width: 100%;
    flex: 1 0 50%;
`

export const ImageWrapper = styled.div`
    overflow: auto;
    

    
    position: relative;
    
    
    
    max-height: 500px;
    
    
    width: 500px;
    height: 500px;
    
`
export const ProjectImage = styled(Image)`
    position: absolute;
`