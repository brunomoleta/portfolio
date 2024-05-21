import React from "react";
import ParagraphItem from "@/components/SingleProject/ProjParagraphs/ParagraphItem";
import Spinner from "@/components/Spinner";
import { testsFullData } from "@/services/testsFull.data.ts";
import { useUtilsStore } from "@/providers/utils.store.ts";

function TestsTopInfo() {
  const { project } = useUtilsStore();
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
