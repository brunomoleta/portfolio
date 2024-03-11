import React from "react";
import {
    InfoWrapper,
    Subtitle,
    Title,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { IProject } from "@/types/types";

function ProjectInfo({ item }: { item: IProject }) {
  const { title, subTitle } = item;
  return (
    <InfoWrapper>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </InfoWrapper>
  );
}

export default ProjectInfo;
