import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";
import {frontEndFullData} from "@/services/frontEndFull.data.ts";
import {backEndFullData} from "@/services/backEndFull.data.ts";

function EndInfo({ category }: { category: string }) {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

    const frontend = frontEndFullData[project.id - 1];
    const backend = backEndFullData[project.id - 1];

    const { fLearning, fNextSteps } = frontend;
    const { bLearning, bNextSteps } = backend;
  return (
    <>
      <ParagraphItem
        title="aprendizado"
        content={
          category === "front end"
            ? fLearning
            : "back end"
              ? bLearning
              : "teste"
        }
      />
      <ParagraphItem
        title="próximos passos"
        content={
          category === "front end"
            ? fNextSteps
            : "back end"
              ? bNextSteps
              : "teste"
        }
      />
    </>
  );
}

export default EndInfo;
