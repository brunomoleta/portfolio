import React from "react";
import { About } from "@/components/SingleProject/SingleProject.style";
import TopInfo from "@/components/SingleProject/ProjParagraphs/TopInfo";
import GeneralTopInfo from "@/components/SingleProject/ProjParagraphs/GeneralTopInfo";
import EndInfo from "@/components/EndInfo";

function ProjParagraphs({
  infoType,
  isStart = true,
}: {
  infoType: "front end" | "back end" | "general" | "devops";
  isStart?: boolean;
}) {
  return (
    <About style={{ color: "var(--cool-grey-60)" }} as="section">
      {infoType === "general" && isStart && <GeneralTopInfo />}

      {infoType === "front end" && isStart && <TopInfo category="front end" />}
      {infoType === "front end" && !isStart && <EndInfo category="front end" />}

      {infoType === "back end" && isStart && <TopInfo category="back end" />}
      {infoType === "back end" && !isStart && <EndInfo category="back end" />}
    </About>
  );
}

export default ProjParagraphs;
