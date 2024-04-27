"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2ch;

  position: relative;
`;

export const ProjectArticle = styled.article`
  width: 100%;

  padding: var(--s1) clamp(1px, 3%, var(--s0));
  border-radius: var(--s-1);
  border: 2px solid var(--cool-grey-30);

  height: 100%;
  display: flex;
  flex-flow: column-reverse;
  gap: 4%;
  padding-block-start: var(--s3);
  box-shadow: 4px 4px 12px 0 rgba(141, 141, 141, 0.25);

  @media (min-width: 650px) {
    padding-block-start: var(--s1);
    display: grid;
    grid-template-rows: unset;
    grid-template-columns: 48% 48%;
    max-width: 48rem;
    gap: 4%;
  }
`;
export const InfoWrapper = styled.div`
  @media (min-width: 650px) {
    margin-block-start: unset;
  }
`;

export const ImageWrapper = styled.button`
  position: relative;

  width: 100%;
  height: 100%;

  min-height: 600px;

  overflow: hidden;

  &:hover {
    outline-offset: 12px;

    img {
      transform: scale(1.04);
      transition: transform 350ms ease-in-out;
      border-radius: var(--s-2);
    }
  }

  @media (min-width: 650px) {
    max-width: unset;
  }
`;

export const BaseImage = styled(Image)`
  border-radius: var(--s-1);

  height: auto;
  width: auto;

  object-fit: cover;
  object-position: top;
`;
export const ProjectImage = styled(BaseImage)``;

export const Subtitle = styled.h4`
  color: var(--cool-grey-70);
  font-size: clamp(var(--font-body-sm-2), 4%, var(--font-body-sm-4));
  line-height: 130%;

  margin-block-start: var(--s-1);
`;
export const Title = styled.h3`
  font-weight: var(--weight-bold);
  font-size: clamp(var(--font-body-3), 2svw + 1rem, var(--font-heading-6));
`;

export const ProjTitle = styled(Title)`
  font-size: clamp(var(--font-body-4), 2svw + 1rem, var(--font-heading-7));
  border-bottom: 3px solid var(--teal-40);
  width: fit-content;
`;
