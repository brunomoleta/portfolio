import React from "react";
import { InfoList } from "@/components/SingleProject/SingleProject.style";
import GeneralInfo from "@/components/GeneralInfo";
import SectionData from "@/components/SectionData";

function ProjectDescription({
  infoType,
}: {
  infoType: "front end" | "back end" | "general" | "devops";
}) {
  return (
    <InfoList>
      {infoType === "general" && <GeneralInfo />}
      {infoType === "front end" && <SectionData category="front end" />}
      {infoType === "back end" && <SectionData category="back end" />}
    </InfoList>
  );
}

export default ProjectDescription;
