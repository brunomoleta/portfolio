import React from "react";

import SectionHeader from "@/components/SectionHeader";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { ProjArticle } from "@/components/SingleProject/SingleProject.style";

import { ChildrenProps } from "@/types/types";

function SingleProject({ children }: ChildrenProps) {
  return (
    <>
      <ProjArticle>
        <SectionHeader changeH="h3" word="projeto" />
        {children}
      </ProjArticle>

      <ProjBtn href={"/#inicio"}>
        <ArrowLeftIcon />
        Voltar para página inicial
      </ProjBtn>
    </>
  );
}

export default SingleProject;
