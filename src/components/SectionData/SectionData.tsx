'use client'
import React from "react";
import InfoItem from "@/components/SingleProject/InfoItem";
import {
  ProjectSpecs,
  WrappedItem,
} from "@/components/SingleProject/SingleProject.style.ts";
import { joinArray } from "@/services/service.ts";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style.ts";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";
import { frontEndFullData } from "@/services/frontEndFull.data.ts";
import { backEndFullData } from "@/services/backEndFull.data.ts";
import { projects } from "@/services/projects.data.ts";

function SectionData({
  category,
}: {
  category: "front end" | "back end" | "devops";
}) {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

  const frontend = frontEndFullData[project.id - 1];
  const backend = backEndFullData[project.id - 1];
  const singleProject = projects[project.id - 1];

  const { frontendTags, backendTags } = singleProject;
  const { live, frontEndRepo } = frontend;
  const { doc, backEndRepo } = backend;

  return (
    <>
      <InfoItem title="tecnologias">
        <ProjectSpecs as="ul">
          <WrappedItem>
            {joinArray(category === "front end" ? frontendTags : backendTags)}
          </WrappedItem>
        </ProjectSpecs>
      </InfoItem>
      <InfoItem title={category === "front end" ? "aplicação" : "docs"}>
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {category === "front end" ? live : doc}
        </ProjBtn>
      </InfoItem>
      <InfoItem title="repositório">
        <ProjBtn style={{ marginInlineStart: "var(--s-2)" }} href={live}>
          {category === "front end" ? frontEndRepo : backEndRepo}
        </ProjBtn>
      </InfoItem>
    </>
  );
}

export default SectionData;
