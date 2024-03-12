import React from "react";
import { Name } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import {
  About,
  HeadInfoWrapper,
  HeadWrapper,
} from "@/components/SingleProject/SingleProject.style";
import ProjectDescription from "@/components/SingleProject/ProjectDescription";
import { IProject } from "@/types/types";

function SingleProjHeader({ project }: { project: IProject }) {
  const { title, about1, about2 } = project;

  return (
    <HeadInfoWrapper>
      <Name
        style={{
          marginBlockEnd: "var(--s1)",
          borderBlockEnd: "4px solid var(--teal-30)",
        }}
      >
        {title}
      </Name>
      <HeadWrapper>
        <About style={{ color: "var(--cool-grey-60)" }} as="section">
          <p>{about1}</p>
          <p>{about2}</p>
        </About>
        <ProjectDescription project={project} />
      </HeadWrapper>
    </HeadInfoWrapper>
  );
}

export default SingleProjHeader;
