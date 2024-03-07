import { IProject } from "@/types/children";
import React from "react";
import TagItem from "@/components/TagItem";
import {
  ImageWrapper,
  ProjectArticle,
  ProjectImage,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { upper } from "@/services/service";

export const ProjectCard = ({ item }: { item: IProject }) => {
  const {
    title,
    subTitle,
    illustration,
    tags,
    doc,
    live,
    frontEndRepo,
    backEndRepo,
  } = item;
  return (
    <>
      <ProjectArticle>
        <h3>{upper(title)}</h3>
        <h4>{upper(subTitle)}</h4>
        <ImageWrapper>
          <ProjectImage
            fill={true}
            src={illustration}
            alt="human hand holding a mobile with the app running in it"
          />
        </ImageWrapper>
        {tags.map((tag, index) => (
          <TagItem key={index} tag={tag} />
        ))}
      </ProjectArticle>
    </>
  );
};

export default ProjectCard;
