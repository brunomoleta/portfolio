import React from "react";

import SectionHeader from "@/components/SectionHeader";

import { ProjArticle } from "@/components/SingleProject/SingleProject.style";


function SingleProject({
  children,
  buttons,
}: {
  children: React.ReactNode;
  buttons: React.ReactNode;
}) {
  return (
    <>
      <ProjArticle>
        <SectionHeader changeH="h3" word="projeto" />
        {children}
      </ProjArticle>
        {buttons}
    </>
  );
}

export default SingleProject;
