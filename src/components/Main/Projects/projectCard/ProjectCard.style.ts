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
  grid-template-rows: 15ex 600px auto auto;

  box-shadow: 4px 4px 12px 0 rgba(141, 141, 141, 0.25);
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: var(--s-4);
`;

export const ImageWrapper = styled(Link)`
    position: relative;

    width: 100%;
    height: 100%;

    max-width: 400px;
    
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
`;
export const ProjectImage = styled(Image)`
  max-height: 600px;

  border-radius: var(--s-1);

  height: auto;
  width: auto;

  object-fit: cover;
  object-position: top;
`;

export const Subtitle = styled.h4`
  word-break: normal;
  color: var(--cool-grey-40);
  font-size: clamp(var(--font-body-sm-2), 4%, var(--font-body-sm-4));
  line-height: 130%;
`;
export const Title = styled.h3`
  font-weight: 700;
  font-size: clamp(var(--font-body-sm-1), 4svw, var(--font-body-sm-3));
`;

export const SectionTitle = styled(Title)`
  font-size: var(--font-body-3);
`;
