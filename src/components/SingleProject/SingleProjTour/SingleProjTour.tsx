import React from "react";
import { TourSection } from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";
import { SubName } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import TourPiece from "@/components/SingleProject/SingleProjTour/TourPiece";
import FrontImage from "@/components/SingleProject/FrontImage";
import BackEndCode from "@/components/SingleProject/SingleProjTour/BackEndCode";
import ProjectLinks from "@/components/SingleProject/ProjectLinks";

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
    <TourSection>
      <SubName>{isFront ? "Front end" : "Back end"}</SubName>
      {isFront ? mapFront : mapBack}

      <Span />
      <ProjectLinks isFront={isFront} project={project} />
    </TourSection>
  );
}

const Span = () => (
  <span
    style={{ fontSize: "var(--font-body-sm-2)", color: "var(--cool-grey-60)" }}
  >
    Para saber ainda mais, te convido a acessar os links a seguir:{" "}
  </span>
);
export default SingleProjTour;
