import React from "react";
import { About } from "@/components/SingleProject/SingleProject.style";

import { IProject } from "@/types/types";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";

function ProjParagraphs({
  project,
  infoType,
  isStart = true,
}: {
  project: IProject;
  infoType: "front" | "back" | "general";
  isStart?: boolean;
}) {
  const {
    Bresponsibilities,
    Fresponsibilities,

    FnextSteps,
    BnextSteps,

    Flearning,
    Blearning,
    FChallenges,
    BChallenges,

    goals,

    about1,
    target,
  } = project;

  const general = (
    <>
      <ParagraphItem title="objetivos" content={goals} />
      <ParagraphItem title="ponto de partida" content={about1} />
      <ParagraphItem title="público alvo" content={target} />
    </>
  );
  const frontStart = (
    <>
      <ParagraphItem
        title="responsabilidades minhas"
        content={Fresponsibilities}
      />
      <ParagraphItem
        title="desafios e bloqueios enfrentados"
        content={FChallenges}
      />
    </>
  );
  const frontEndEnd = (
    <>
      <ParagraphItem title="aprendizado" content={Flearning} />
      <ParagraphItem title="próximos passos" content={FnextSteps} />
    </>
  );
  const backStart = (
    <>
      <ParagraphItem title="responsabilidades" content={Bresponsibilities} />
      <ParagraphItem
        title="desafios e bloqueios enfrentados"
        content={BChallenges}
      />
    </>
  );
  const backEndEnd = (
    <>
      <ParagraphItem title="aprendizado" content={Blearning} />
      <ParagraphItem title="próximos passos" content={BnextSteps} />
    </>
  );

  return (
    <About style={{ color: "var(--cool-grey-60)" }} as="section">
      {infoType === "general" && isStart && general}

      {infoType === "front" && isStart && frontStart}
      {infoType === "front" && !isStart && frontEndEnd}

      {infoType === "back" && isStart && backStart}
      {infoType === "back" && !isStart && backEndEnd}
    </About>
  );
}

export default ProjParagraphs;
