import React from "react";
import InfoItem from "@/components/SingleProject/InfoItem";
import { ProjectSpecs } from "@/components/SingleProject/SingleProject.style.ts";
import Authors from "@/components/SingleProject/ProjectDescription/Authors";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";

function GeneralInfo() {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

  const { date, authors, motivation } = project;
  return (
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
}

export default GeneralInfo;
