import React from "react";
import {
  ImageElement,
  ImageWrapper,
  TourSection,
} from "@/components/SingleProject/SingleProject.style";
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
import JustifyParagraph from "@/components/JustifyParagraph";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style.ts";

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
      <JustifyParagraph title={upper(item.small)} text={item.explain} />
      <div>
        <ImageWrapper>
          <ImageElement unoptimized={true} src={item.gif} alt={item.small} />
        </ImageWrapper>
        <Describe>Demo: suíte de teste de {upper(item.small)}</Describe>
        <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
      </div>
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
        <ProjParagraphs
          infoType={sectionType}
          isStart={false}
        />
      </TourSection>
    </>
  );
}

export default SingleProjTour;
