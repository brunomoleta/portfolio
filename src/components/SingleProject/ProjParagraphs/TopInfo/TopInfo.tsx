import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";

function TopInfo({ category }: { category: string }) {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;
  const { Fresponsibilities, FChallenges, Bresponsibilities, BChallenges } =
    project;

  return (
    <>
      <ParagraphItem
        title="responsabilidades"
        content={
          category === "front end"
            ? Fresponsibilities
            : "back end"
              ? Bresponsibilities
              : "teste"
        }
      />
      <ParagraphItem
        title="desafios e bloqueios enfrentados"
        content={FChallenges}
      />
    </>
  );
}

export default TopInfo;
