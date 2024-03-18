import React from "react";
import {
  ProjName,
} from "@/components/Main/hero/heroHeading/HeroHeading.style";
import {
  HeadInfoWrapper,
} from "@/components/SingleProject/SingleProject.style";
import ProjectDescription from "@/components/SingleProject/ProjectDescription";
import { IProject } from "@/types/types";
import SectionInfo from "@/components/SingleProject/SectionInfo";
import ProjParagraphs from "@/components/SingleProject/ProjParagraphs";

function SingleProjHeader({ project }: { project: IProject }) {
  const { title } = project;

  return (
    <HeadInfoWrapper>
      <ProjName>{title}</ProjName>
      <SectionInfo>
        <ProjParagraphs infoType="general" project={project} />
        <ProjectDescription  infoType="general" project={project} />
      </SectionInfo>
    </HeadInfoWrapper>
  );
}

export default SingleProjHeader;
