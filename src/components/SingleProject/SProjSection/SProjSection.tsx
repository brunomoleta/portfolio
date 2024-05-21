"use client";
import React from "react";
import SingleProjHeader from "@/components/SingleProject/SingleProjHeader";
import SingleProjTour from "@/components/SingleProject/SingleProjTour";
import ProjectStep from "@/components/ProjectStep";
import { useUtilsStore } from "@/providers/utils.store.ts";

function SProjSection() {
  const { step } = useUtilsStore();

  return (
    <>
      {step === 0 && (
        <ProjectStep>
          <SingleProjHeader />
        </ProjectStep>
      )}
      {step === 1 && (
        <ProjectStep>
          <SingleProjTour sectionType="front end" />
        </ProjectStep>
      )}
      {step === 2 && (
        <ProjectStep>
          <SingleProjTour sectionType="back end" />
        </ProjectStep>
      )}
      {step === 3 && (
        <ProjectStep>
          <SingleProjTour sectionType="devops" />
        </ProjectStep>
      )}
    </>
  );
}

export default SProjSection;
