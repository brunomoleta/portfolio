import React from "react";
import { About } from "@/components/SingleProject/SingleProject.style";

import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import { Utils } from "@/types/utils";
import Spinner from "@/components/Spinner";

function ProjParagraphs({
  infoType,
  isStart = true,
}: {
  infoType: "front end" | "back end" | "general" | "devops";
  isStart?: boolean;
}) {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

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

      {infoType === "front end" && isStart && frontStart}
      {infoType === "front end" && !isStart && frontEndEnd}

      {infoType === "back end" && isStart && backStart}
      {infoType === "back end" && !isStart && backEndEnd}
    </About>
  );
}

export default ProjParagraphs;
