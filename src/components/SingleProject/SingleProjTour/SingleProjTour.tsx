import React from "react";
import { TourSection } from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";
import {
  OtherName,
  SubName,
} from "@/components/Main/hero/heroHeading/HeroHeading.style";
import TourPiece from "@/components/SingleProject/SingleProjTour/TourPiece";
import FrontImage from "@/components/SingleProject/FrontImage";
import BackEndCode from "@/components/SingleProject/SingleProjTour/BackEndCode";
import ProjectDescription from "@/components/SingleProject/ProjectDescription";
import SectionInfo from "@/components/SingleProject/SectionInfo";
import ProjParagraphs from "@/components/SingleProject/ProjParagraphs";
import { Wrapper } from "@/components/SingleProject/SingleProjTour/SingleProjTour.style";
import { upper } from "@/services/service.ts";
import TestCode from "@/components/SingleProject/SingleProjTour/TestCode";

function SingleProjTour({
  project,
  sectionType,
}: {
  project: IProject;
  sectionType: "front end" | "back end" | "devops";
}) {
  const { frontContent, backContent, devOpsContent } = project;

  const mapFront = frontContent.map((item, index) => (
    <TourPiece key={index}>
      <FrontImage content={item} />
    </TourPiece>
  ));

  const mapBack = backContent.map((item, index) => (
    <TourPiece key={index}>
      <BackEndCode content={item} />
    </TourPiece>
  ));

  const mapDevops = devOpsContent?.map((item, index) => (
    <TourPiece key={index}>
      <TestCode content={item} />
    </TourPiece>
  ));

  const frontWord = "Fluxo do usuário";
  const backWord = "Tabela, documentação e mais";
  const opsWord = "Testes automatizados";

  const returnWord = (word: string) => {
    if (word === "front end") return frontWord;
    if (word === "back end") return backWord;
    return opsWord;
  };
  const returnContent = (content: string) => {
    if (content === "front end") return mapFront;
    if (content === "back end") return mapBack;
    return mapDevops;
  };

  return (
    <>
      <TourSection>
        <SubName>{upper(sectionType)}</SubName>
        <SectionInfo>
          <ProjParagraphs infoType={sectionType} />
          <ProjectDescription infoType={sectionType} />
        </SectionInfo>
        <Wrapper>
          <OtherName>{returnWord(sectionType)}</OtherName>
          {returnContent(sectionType)}
        </Wrapper>
        <ProjParagraphs infoType={sectionType} isStart={false} />
      </TourSection>
    </>
  );
}

export default SingleProjTour;
