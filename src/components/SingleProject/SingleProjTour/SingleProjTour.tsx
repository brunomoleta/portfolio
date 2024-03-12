import React from "react";
import { TourSection } from "@/components/SingleProject/SingleProject.style";
import { IImage, IProject } from "@/types/types";
import { SubName } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import TourPiece from "@/components/SingleProject/SingleProjTour/TourPiece";

function SingleProjTour({
  project,
  tourType = true,
}: {
  project: IProject;
  tourType?: boolean;
}) {
  const { frontImages, backImages } = project;
  console.log(frontImages);
  return (
      <TourSection>
        <SubName>{tourType ? "Front end" : "Back end"}</SubName>
        {
          tourType ?
              <>
                {frontImages.map((item, index) => (
                    <TourPiece key={index} content={item}/>
                ))}
              </> :
              <>
                {backImages.map((item, index) => (
                    <TourPiece key={index} content={item}/>
                ))}
              </>
        }
      </TourSection>
  );
}

export default SingleProjTour;
