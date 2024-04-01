import React from "react";
import ProjectDescription from "@/components/SingleProject/ProjectDescription";
import { IProject } from "@/types/types";
import SectionInfo from "@/components/SingleProject/SectionInfo";
import ProjParagraphs from "@/components/SingleProject/ProjParagraphs";

function SingleProjHeader({ project }: { project: IProject }) {
  return (
    <SectionInfo>
      <ProjParagraphs infoType="general" project={project} />
      <ProjectDescription infoType="general" project={project} />
    </SectionInfo>
  );
}

export default SingleProjHeader;
