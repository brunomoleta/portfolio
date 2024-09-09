"use client";
import styled from "styled-components";
import Image from "next/image";
import { PButton } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style.ts";

export const Look = styled.span``;
export const Title = styled.h3`
  font-weight: var(--weight-bold);
  font-size: clamp(var(--font-body-3), 2svw + 1rem, var(--font-heading-6));
  margin-inline-end: auto;
`;
export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
  min-height: 800px;

  outline-offset: 12px;

  border-radius: var(--s-1);
  @media (min-width: 650px) {
    max-width: unset;
  }
  & > img {
    filter: saturate(60%);
  }

  @media (min-width: 50rem) {
    min-height: 500px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2ch;
  justify-content: space-between;

  position: relative;
`;

export const ProjectArticle = styled.button`
  width: 100%;

  padding: var(--s1) clamp(1px, 3%, var(--s0));
  border-radius: var(--s-1);
  border: 4px solid var(--color-text-fourth);

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
    grid-template-columns: 48.5% 48.5%;
    max-width: 48rem;
    gap: 3%;
  }

  & ${Title} {
    transition: color 750ms ease-out;
  }

  &:hover ${PButton} {
    border: 2px solid transparent;
    border-block-end: 2px solid var(--color-background);
  }

  &:hover ${Title} {
    transition: color 250ms ease-in;
    color: var(--teal-primary);
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition:
      border-color 800ms ease-out,
      box-shadow 600ms ease-out;

    &:hover {
      transition: box-shadow 800ms;
      box-shadow: 6px 6px 14px 2px var(--teal-40);
    }
    & > ${ImageWrapper} > img {
      transition:
        transform 500ms ease-in,
        filter 800ms ease-out;
    }

    &:hover,
    &:focus {
      img {
        filter: saturate(100%);
        transform: scale(1.06);
        transition:
          transform 200ms ease-in,
          filter 400ms ease-in;
      }
    }
  }
`;
export const InfoWrapper = styled.div`
  text-align: initial;
  display: grid;

  gap: var(--s-1);
  @media (min-width: 50rem) {
    grid-template-rows: 6.5ex 1fr;
    margin-block-start: unset;
  }
`;

export const BaseImage = styled(Image)`
  display: block;
  height: auto;
  width: auto;

  object-fit: cover;
  object-position: top;
`;
export const ProjectImage = styled(BaseImage)``;

export const Subtitle = styled.h4`
  color: var(--color-text-third);
  font-size: clamp(var(--font-body-sm-2), 4%, var(--font-body-sm-4));
  line-height: 130%;
`;

export const ProjTitle = styled(Title)`
  font-size: clamp(var(--font-body-4), 2svw + 1rem, var(--font-heading-7));
  width: fit-content;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 3px;
    background: var(--gradient);
  }
  @media (min-width: 50rem) {
    max-inline-size: 10ch;
  }
`;
