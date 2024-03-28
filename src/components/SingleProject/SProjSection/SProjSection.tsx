import React from "react";
import SingleProjHeader from "@/components/SingleProject/SingleProjHeader";
import SingleProjTour from "@/components/SingleProject/SingleProjTour";
import { Wrapper } from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";
import Balancer from "react-wrap-balancer";

function SProjSection({ project }: { project: IProject }) {
  return (
    <Wrapper>
      <SingleProjHeader project={project} />{" "}
      <Balancer>
        <SingleProjTour isFront={true} project={project} />
        <SingleProjTour isFront={false} project={project} />
      </Balancer>
    </Wrapper>
  );
}

export default SProjSection;
