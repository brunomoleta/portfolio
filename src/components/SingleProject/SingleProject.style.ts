"use client";
import styled from "styled-components";
import { BaseImage } from "@/components/Main/Projects/projectCard/ProjectCard.style";

export const TourSection = styled.section`
  margin-block: var(--s2) 0;
`;

export const ProjArticle = styled.article``;

export const ImageWrapper = styled.div`
  position: relative;
  display: grid;
  place-content: center;

  aspect-ratio: 2600/1526;

  border-radius: var(--s-1);

  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
`;

export const ImageElement = styled(BaseImage)``;

export const HeadWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: var(--s0);
  width: 100%;

  @media (min-width: 55rem) {
    flex-flow: revert;
    gap: var(--s2);
    position: relative;
  }
`;
export const InfoList = styled.ul`
  width: fit-content;
  height: fit-content;

  position: sticky;
  top: 20px;
`;

export const Item = styled.li`
  font-size: var(--font-body-sm-2);
  border-block-end: 2px solid var(--teal-30);
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 350px) {
    display: grid;
    grid-template-columns: 11ch auto-fill;
  }
`;
export const WrappedItem = styled(Item)`
  border-block-end: revert;
  display: revert;
`;

export const ProjectSpecs = styled.span`
  font-weight: var(--weight-medium);
`;
export const PItem = styled.h3`
  color: var(--color-text-third);
  display: inline;
`;

export const About = styled.section`
  color: var(--cool-grey-60);

  margin-block: 0 var(--s1);
  line-height: 130%;

  max-inline-size: 50ch;

  display: flex;
  flex-flow: column;
  gap: var(--s0);
  font-size: revert;
`;
