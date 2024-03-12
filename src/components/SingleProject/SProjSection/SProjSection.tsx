import React from "react";
import SingleProjHeader from "@/components/SingleProject/SingleProjHeader";
import SingleProjTour from "@/components/SingleProject/SingleProjTour";
import ProjectLinks from "@/components/SingleProject/ProjectLinks";
import { Wrapper } from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";

function SProjSection({ project }: { project: IProject }) {
  return (
    <Wrapper>
      <SingleProjHeader project={project} />{" "}
      <div>
        <SingleProjTour project={project} />

        <Span />
        <ProjectLinks project={project} />
      </div>
      <div>
        <SingleProjTour tourType={false} project={project} />

        <Span />
        <ProjectLinks isFront={false} project={project} />
      </div>
    </Wrapper>
  );
}

const Span = () => (
  <span style={{ color: "var(--cool-grey-60)" }}>
    Para saber ainda mais, te convido a acessar os seguintes links:{" "}
  </span>
);

export default SProjSection;
