import React from "react";
import {
  InfoList,
  ProjectSpecs,
  WrappedItem,
} from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";
import { joinArray } from "@/services/service";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import Authors from "@/components/SingleProject/ProjectDescription/Authors";
import InfoItem from "@/components/SingleProject/InfoItem";

function ProjectDescription({
  project,
  infoType,
}: {
  project: IProject;
  infoType: "front end" | "back end" | "general" | "devops";
}) {
  const {
    live,

    doc,
    backEndRepo,
    frontEndRepo,

    date,
    authors,
    motivation,

    frontendTags,
    backendTags,
  } = project;

  const general = (
    <>
      <InfoItem title="motivação">
        <ProjectSpecs>{motivation}</ProjectSpecs>
      </InfoItem>
      <InfoItem title="autoria">
        <ProjectSpecs>
          <Authors authors={authors} />
        </ProjectSpecs>
      </InfoItem>
      <InfoItem title="data de início">
        <ProjectSpecs>{date}</ProjectSpecs>
      </InfoItem>
    </>
  );
  const SectionData = ({
    project,
  }: {
    project: "front end" | "back end" | "devops";
  }) => (
    <>
      <InfoItem title="tecnologias">
        <ProjectSpecs as="ul">
          <WrappedItem>
            {joinArray(project === "front end" ? frontendTags : backendTags)}
          </WrappedItem>
        </ProjectSpecs>
      </InfoItem>
      <InfoItem title={project === "front end" ? "aplicação" : "docs"}>
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {project === "front end" ? live : doc}
        </ProjBtn>
      </InfoItem>
      <InfoItem title="repositório">
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {project === "front end" ? frontEndRepo : backEndRepo}
        </ProjBtn>
      </InfoItem>
    </>
  );
  return (
    <InfoList>
      {infoType === "general" && general}

      {infoType === "front end" && <SectionData project="front end" />}

      {infoType === "back end" && <SectionData project="back end" />}
    </InfoList>
  );
}

export default ProjectDescription;
