import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";

import Spinner from "@/components/Spinner";
import { frontEndFullData } from "@/services/frontEndFull.data.ts";
import { backEndFullData } from "@/services/backEndFull.data.ts";
import { useUtilsStore } from "@/providers/utils.store.ts";

function TopInfo({ category }: { category: string }) {
  const { project } = useUtilsStore();
  if (!project) return <Spinner />;
  const frontend = frontEndFullData[project.id - 1];
  const backend = backEndFullData[project.id - 1];

  const { fResponsibilities, fChallenges } = frontend;
  const { bResponsibilities } = backend;
  return (
    <>
      <ParagraphItem
        title="responsabilidades"
        content={
          category === "front end"
            ? fResponsibilities
            : "back end"
              ? bResponsibilities
              : "teste"
        }
      />
      <ParagraphItem
        title="desafios e bloqueios enfrentados"
        content={fChallenges}
      />
    </>
  );
}

export default TopInfo;
