import React from "react";
import {
  Subtitle,
  Title,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { upper } from "@/services/service";
import { IProject } from "@/types/children";

function ProjectInfo({ item }: { item: IProject }) {
  const { title, subTitle } = item;
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{upper(subTitle)}</Subtitle>
    </div>
  );
}

export default ProjectInfo;
