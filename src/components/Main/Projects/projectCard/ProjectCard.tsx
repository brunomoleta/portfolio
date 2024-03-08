import { IProject } from "@/types/children";
import React from "react";
import { ProjectArticle } from "@/components/Main/Projects/projectCard/ProjectCard.style";
import ProjectRelatedTechs from "@/components/Main/Projects/projectCard/ProjectRelatedTechs";
import ProjectIllustration from "@/components/Main/Projects/projectCard/ProjectIllustration";
import ProjectInfo from "@/components/Main/Projects/projectCard/ProjectInfo";
import ProjectBtn from "@/components/Main/Projects/projectCard/ProjectBtn";

export const ProjectCard = ({ item }: { item: IProject }) => {
  const { illustration, tags, href } = item;
  return (
    <>
      <ProjectArticle>
        <ProjectInfo item={item} />
        <ProjectIllustration illustration={illustration} />
        <ProjectRelatedTechs tags={tags} />
        <ProjectBtn destination={href} />
      </ProjectArticle>
    </>
  );
};

export default ProjectCard;
