"use client";
import React from "react";
import SingleProjHeader from "@/components/SingleProject/SingleProjHeader";
import SingleProjTour from "@/components/SingleProject/SingleProjTour";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import ProjectStep from "@/components/ProjectStep";
import Spinner from "@/components/Spinner";

function SProjSection() {
  const { step } = useUtilsContext() as Utils;

  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

  return (
    <>
      {step === 0 && (
        <ProjectStep>
          <SingleProjHeader />
        </ProjectStep>
      )}
      {step === 1 && (
        <ProjectStep>
          <SingleProjTour sectionType="front end" project={project} />
        </ProjectStep>
      )}
      {step === 2 && (
        <ProjectStep>
          <SingleProjTour sectionType="back end" project={project} />
        </ProjectStep>
      )}
      {step === 3 && (
        <ProjectStep>
          <SingleProjTour sectionType="devops" project={project} />
        </ProjectStep>
      )}
    </>
  );
}

export default SProjSection;
