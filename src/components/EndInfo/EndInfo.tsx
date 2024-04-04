import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";

function EndInfo({ category }: { category: string }) {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

  const { Blearning, BnextSteps, Flearning, FnextSteps } = project;
  return (
    <>
      <ParagraphItem
        title="aprendizado"
        content={
          category === "front end"
            ? Flearning
            : "back end"
              ? Blearning
              : "teste"
        }
      />
      <ParagraphItem
        title="próximos passos"
        content={
          category === "front end"
            ? FnextSteps
            : "back end"
              ? BnextSteps
              : "teste"
        }
      />
    </>
  );
}

export default EndInfo;
