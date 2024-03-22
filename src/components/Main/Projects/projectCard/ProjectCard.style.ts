"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const ProjectArticle = styled.article`
  width: 100%;

  padding: var(--s1) clamp(1px,3%,var(--s0));
  border-radius: var(--s-1);
  border: 2px solid var(--cool-grey-30);

  max-width: 460px;

  display: grid;
  grid-template-rows: 600px auto;

  box-shadow: 4px 4px 12px 0 rgba(141, 141, 141, 0.25);
    
  @media (min-width: 650px){
      grid-template-rows: unset;
      grid-template-columns: 48% 48%;
      max-width: 50rem;
      gap: 4%;
  }  
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: var(--s-2);
  margin-block-start: var(--s1);  
    @media (min-width: 650px){
        margin-block-start: unset;  
        
    }
`;

export const ImageWrapper = styled(Link)`
    position: relative;

    width: 100%;
    height: 100%;
    
    min-height: 600px;
        
    overflow: hidden;

    &:hover {
        outline: 2px solid transparent;
        outline-offset: 2px;

        img {
            transform: scale(1.05);
            transition: transform 350ms ease-in-out;
            border-radius: var(--s-2);
        }
    }
    
    @media (min-width: 650px){
        max-width: unset;
    }
`;

export const BaseImage = styled(Image)`
  border-radius: var(--s-1);

  height: auto;
  width: auto;

  object-fit: cover;
  object-position: top;

`
export const ProjectImage = styled(BaseImage)`
`;

export const Subtitle = styled.h4`
  word-break: normal;
  color: var(--cool-grey-50);
  font-size: clamp(var(--font-body-sm-2), 4%, var(--font-body-sm-4));
  line-height: 130%;
`;
export const Title = styled.h3`
    font-weight: 700;
    font-size: clamp(
            var(--font-body-3), 
            2svw + 1rem, 
            var(--font-heading-6));
`;

export const ProjTitle = styled(Title)`
    font-size: clamp(
            var(--font-body-4),
            2svw + 1rem,
            var(--font-heading-7));
`;
