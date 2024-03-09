import React from "react";
import {
  ImageWrapper,
  ProjectImage,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { StaticImageData } from "next/image";

function ProjectIllustration({
  illustration,
  destination,
}: {
  destination: string;
  illustration: StaticImageData;
}) {
  return (
    <ImageWrapper href={destination}>
      <ProjectImage
        sizes={"(max-width: 550px) 100vw, (max-width: 1200px) 50vw, 30vw"}
        fill={true}
        src={illustration}
        alt="human hand holding a mobile with the app running in it"
      />
    </ImageWrapper>
  );
}

export default ProjectIllustration;
