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

function SingleProjTour({
  project,
  isFront = true,
}: {
  project: IProject;
  isFront?: boolean;
}) {
  const { frontImages, backImages } = project;

  const mapFront = frontImages.map((item, index) => (
    <TourPiece key={index}>
      <FrontImage content={item} />
    </TourPiece>
  ));
  const mapBack = backImages.map((item, index) => (
    <TourPiece key={index}>
      <BackEndCode content={item} />
    </TourPiece>
  ));

  return (
    <>
      <TourSection>
        <SubName>{isFront ? "Front end" : "Back end"}</SubName>
        <SectionInfo>
          <ProjParagraphs
            infoType={isFront ? "front" : "back"}
            project={project}
          />
          <ProjectDescription
            infoType={isFront ? "front" : "back"}
            project={project}
          />
        </SectionInfo>
        <Wrapper>
          {isFront ? (
            <OtherName>Fluxo do usuário</OtherName>
          ) : (
            <OtherName>Tabela, documentação e mais</OtherName>
          )}
          {isFront ? mapFront : mapBack}
        </Wrapper>
        <ProjParagraphs
          infoType={isFront ? "front" : "back"}
          project={project}
          isStart={false}
        />
      </TourSection>
    </>
  );
}

export default SingleProjTour;
