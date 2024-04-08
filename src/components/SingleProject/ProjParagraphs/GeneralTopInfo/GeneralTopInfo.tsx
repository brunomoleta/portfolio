import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";
import {projsIntro} from "@/services/intro.data.ts";

function GeneralTopInfo() {
  const { project } = useUtilsContext() as Utils;
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
