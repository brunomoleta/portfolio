import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import { useUtilsContext } from "@/providers/useContext";
import Spinner from "@/components/Spinner";
import { Utils } from "@/types/utils";
import { testsFullData } from "@/services/testsFull.data.ts";

function TestsTopInfo() {
  const { project } = useUtilsContext() as Utils;
  if (!project) return <Spinner />;

  const devOps = testsFullData[project.id - 1];

  const { testGoals } = devOps;

  return (
    <>
      <ParagraphItem title="objetivos" content={testGoals} />
    </>
  );
}

export default TestsTopInfo;
