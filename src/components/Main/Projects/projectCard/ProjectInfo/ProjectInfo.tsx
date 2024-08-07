import React from "react";
import {
  InfoWrapper,
  ProjTitle,
  Subtitle,
  Title,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { IProject } from "@/types/types";
import Balancer from "react-wrap-balancer";

function ProjectInfo({ item }: { item: IProject }) {
  const { title, subTitle } = item;
  return (
    <InfoWrapper>
      <ProjTitle>{title}</ProjTitle>
      <Balancer>
        <Subtitle>{subTitle}</Subtitle>
      </Balancer>
    </InfoWrapper>
  );
}

export default ProjectInfo;
