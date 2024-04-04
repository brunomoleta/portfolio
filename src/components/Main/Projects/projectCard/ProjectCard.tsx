import { IProject } from "@/types/types";
import React from "react";
import {
  ProjectArticle,
  Wrapper,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import ProjectRelatedTechs from "@/components/Main/Projects/projectCard/ProjectRelatedTechs";
import ProjectIllustration from "@/components/Main/Projects/projectCard/ProjectIllustration";
import ProjectInfo from "@/components/Main/Projects/projectCard/ProjectInfo";
import ProjectBtn from "@/components/Main/Projects/projectCard/ProjectBtn";

export const ProjectCard = ({ item }: { item: IProject }) => {
  const { illustration, backendTags, frontendTags, href } = item;
  return (
    <>
      <ProjectArticle>
        <Wrapper>
          <ProjectInfo item={item} />
          <ProjectRelatedTechs heading="Front end" tags={frontendTags} />
          <ProjectRelatedTechs heading="Back end" tags={backendTags} />
          <ProjectBtn destination={href} />
        </Wrapper>
        <ProjectIllustration
          destination={href}
          illustration={illustration}
        />
      </ProjectArticle>
    </>
  );
};

export default ProjectCard;
