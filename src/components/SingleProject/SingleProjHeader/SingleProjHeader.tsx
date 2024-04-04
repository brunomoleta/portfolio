import React from "react";
import ProjectDescription from "@/components/SingleProject/ProjectDescription";
import SectionInfo from "@/components/SingleProject/SectionInfo";
import ProjParagraphs from "@/components/SingleProject/ProjParagraphs";

function SingleProjHeader() {
  return (
    <SectionInfo>
      <ProjParagraphs infoType="general" />
      <ProjectDescription infoType="general" />
    </SectionInfo>
  );
}

export default SingleProjHeader;
