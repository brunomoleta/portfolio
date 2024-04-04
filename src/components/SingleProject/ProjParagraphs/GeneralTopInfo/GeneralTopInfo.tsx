import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";

function GeneralTopInfo() {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;
  const { goals, about1, target } = project;

  return (
    <>
      <ParagraphItem title="objetivos" content={goals} />
      <ParagraphItem title="ponto de partida" content={about1} />
      <ParagraphItem title="público alvo" content={target} />
    </>
  );
}

export default GeneralTopInfo;
