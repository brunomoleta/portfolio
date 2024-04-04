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

function SectionData({
  category,
}: {
  category: "front end" | "back end" | "devops";
}) {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

  const { frontendTags, frontEndRepo, backEndRepo, backendTags, live, doc } =
    project;
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
