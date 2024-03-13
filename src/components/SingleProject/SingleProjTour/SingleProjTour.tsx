import React from "react";
import { TourSection } from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";
import { SubName } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import TourPiece from "@/components/SingleProject/SingleProjTour/TourPiece";
import FrontImage from "@/components/SingleProject/FrontImage";
import BackEndCode from "@/components/SingleProject/SingleProjTour/BackEndCode";

function SingleProjTour({
  project,
  tourType = true,
}: {
  project: IProject;
  tourType?: boolean;
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
    <TourSection>
      <SubName>{tourType ? "Front end" : "Back end"}</SubName>
      {tourType ? mapFront : mapBack}
    </TourSection>
  );
}

export default SingleProjTour;
