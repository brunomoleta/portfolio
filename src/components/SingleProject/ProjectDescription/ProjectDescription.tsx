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
  infoType: "front" | "back" | "general";
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
  const frontStart = (
    <>
      <InfoItem title="tecnologias">
        <ProjectSpecs as="ul">
          <WrappedItem>{joinArray(frontendTags)}</WrappedItem>
        </ProjectSpecs>
      </InfoItem>
      <InfoItem title="aplicação">
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {live}
        </ProjBtn>
      </InfoItem>
      <InfoItem title="repositório">
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {frontEndRepo}
        </ProjBtn>
      </InfoItem>
    </>
  );

  const backStart = (
    <>
      <InfoItem title="tecnologias">
        <ProjectSpecs as="ul">
          <WrappedItem>{joinArray(backendTags)}</WrappedItem>
        </ProjectSpecs>
      </InfoItem>
      <InfoItem title="docs">
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {doc}
        </ProjBtn>
      </InfoItem>
      <InfoItem title="repositório">
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {backEndRepo}
        </ProjBtn>
      </InfoItem>
    </>
  );

  return (
    <InfoList>
      {infoType === "general" && general}

      {infoType === "front" && frontStart}

      {infoType === "back" && backStart}
    </InfoList>
  );
}

export default ProjectDescription;
