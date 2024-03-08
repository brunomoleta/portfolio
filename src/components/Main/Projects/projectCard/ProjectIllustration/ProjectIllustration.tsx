import React from "react";
import {
  ImageWrapper,
  ProjectImage,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import {StaticImageData} from "next/image";

function ProjectIllustration({
  illustration,
}: {
  illustration: StaticImageData;
}) {
  return (
    <ImageWrapper>
      <ProjectImage
        fill={true}
        src={illustration}
        alt="human hand holding a mobile with the app running in it"
      />
    </ImageWrapper>
  );
}

export default ProjectIllustration;