import React from "react";
import { projects } from "@/services/data";
import { Name } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import SectionHeader from "@/components/SectionHeader";

import {
  About,
  HeadInfoWrapper,
  HeadWrapper,
} from "@/components/SingleProject/SingleProject.style";
import ProjectDescription from "@/components/SingleProject/ProjectDescription";
import ProjectLinks from "@/components/SingleProject/ProjectLinks";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

function SingleProject({ projectNumber }: { projectNumber: number }) {
  const { title, about1, about2 } = projects[projectNumber];
  return (
    <>
      <article>
        <SectionHeader changeH="h3" word="projeto" />
        <HeadInfoWrapper>
          <Name style={{ borderBlockEnd: "4px solid var(--teal-30)" }}>
            {title}
          </Name>
          <HeadWrapper>
            <About style={{ color: "var(--cool-grey-60)" }} as="section">
              <p>{about1}</p>
              <p>{about2}</p>
            </About>
            <ProjectDescription project={projects[projectNumber]} />
          </HeadWrapper>
        </HeadInfoWrapper>
      </article>
      <ProjectLinks project={projects[projectNumber]} />
      <ProjBtn href={"/#inicio"}>
        <ArrowLeftIcon />
        Voltar para página inicial
      </ProjBtn>
    </>
  );
}

export default SingleProject;
