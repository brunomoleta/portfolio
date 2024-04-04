"use client";
import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import SProjectBtns from "@/components/SingleProject/SProjectBtns";
import { projects } from "@/services/projects.data";
import { IProject } from "@/types/types";
import { ProjName } from "@/components/Main/hero/heroHeading/HeroHeading.style.ts";
import React from "react";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";

const Project = ({ params }: { params: { project: string } }) => {
  const { project } = params;
  const { setProject } = useUtilsContext() as Utils;
  const singleProject: IProject | undefined = projects.find(
    (item) => item.url === project,
  );

  if (!singleProject) return <div>Página não encontrada</div>;
  const { id, title } = singleProject;
  setProject(singleProject);

  return (
    <>
      <SingleProject buttons={<SProjectBtns digit={id} />}>
        <ProjName>{title}</ProjName>
        <SProjSection />
      </SingleProject>
    </>
  );
};

export default Project;
