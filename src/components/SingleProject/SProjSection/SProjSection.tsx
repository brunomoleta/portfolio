"use client";
import React from "react";
import SingleProjHeader from "@/components/SingleProject/SingleProjHeader";
import SingleProjTour from "@/components/SingleProject/SingleProjTour";
import { IProject } from "@/types/types";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import ProjectStep from "@/components/ProjectStep";

function SProjSection({ project }: { project: IProject }) {
  const { step } = useUtilsContext() as Utils;
  return (
    <>
      {step === 0 && (
        <ProjectStep>
          <SingleProjHeader project={project} />
        </ProjectStep>
      )}
      {step === 1 && (
        <ProjectStep>
          <SingleProjTour isFront={true} project={project} />
        </ProjectStep>
      )}
      {step === 2 && (
        <ProjectStep>
          <SingleProjTour isFront={false} project={project} />
        </ProjectStep>
      )}
    </>
  );
}

export default SProjSection;
