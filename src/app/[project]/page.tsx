"use client";
import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import SProjectBtns from "@/components/SingleProject/SProjectBtns";
import { Intro } from "@/types/types";
import { ProjName } from "@/components/Main/hero/heroHeading/HeroHeading.style.ts";
import React from "react";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import { projsIntro } from "@/services/intro.data.ts";
import { toTitleCase } from "@/services/service.ts";

const Project = ({ params }: { params: { project: string } }) => {
  const { project } = params;
  const { setProject } = useUtilsContext() as Utils;
  const singleProject: Intro | undefined = projsIntro.find(
    (item) => item.url === project,
  );

  if (!singleProject) return <div>Página não encontrada</div>;
  const { id, url } = singleProject;
  setProject(singleProject);

  return (
    <>
      <SingleProject buttons={<SProjectBtns digit={id} />}>
        <ProjName>{toTitleCase(url)}</ProjName>
        <SProjSection />
      </SingleProject>
    </>
  );
};

export default Project;
