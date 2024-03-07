import { IProject } from "@/types/children";
import React from "react";
import TagItem from "@/components/TagItem";
import {
  ImageWrapper,
  ProjectArticle,
  ProjectImage,
  Subtitle,
  Title,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { upper } from "@/services/service";
import { LinksListStyle } from "@/components/Main/hero/LinksList/LinksList.style";

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
        <div>
          <Title>{title}</Title>
          <Subtitle>{upper(subTitle)}</Subtitle>
        </div>
        <ImageWrapper>
          <ProjectImage
            fill={true}
            src={illustration}
            alt="human hand holding a mobile with the app running in it"
          />
        </ImageWrapper>
        <LinksListStyle>
          {tags.map((tag, index) => (
            <TagItem key={index} tag={tag} />
          ))}
        </LinksListStyle>
      </ProjectArticle>
    </>
  );
};

export default ProjectCard;
