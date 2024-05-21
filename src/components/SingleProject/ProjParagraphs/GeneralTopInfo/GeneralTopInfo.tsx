import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import Spinner from "@/components/Spinner";
import { projsIntro } from "@/services/intro.data.ts";
import { useUtilsStore } from "@/providers/utils.store.ts";

function GeneralTopInfo() {
  const { project } = useUtilsStore();
  if (!project) return <Spinner />;

  const introData = projsIntro[project.id - 1];
  const { goals, about1, target } = introData;

  return (
    <>
      <ParagraphItem title="objetivos" content={goals} />
      <ParagraphItem title="ponto de partida" content={about1} />
      <ParagraphItem title="público alvo" content={target} />
    </>
  );
}

export default GeneralTopInfo;
