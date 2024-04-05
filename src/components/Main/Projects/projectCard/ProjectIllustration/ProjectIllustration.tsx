import React from "react";
import {
  ImageWrapper,
  ProjectImage,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import { StaticImageData } from "next/image";
import Spinner from "@/components/Spinner";

function ProjectIllustration({
  illustration,
  isLoading,
  ...props
}: ProjectIllustrationProps) {
  return (
    <ImageWrapper {...props}>
      <ProjectImage
        sizes={"(max-width: 550px) 100vw, (max-width: 1200px) 50vw, 30vw"}
        fill={true}
        loading="lazy"
        src={illustration}
        alt="human hand holding a mobile with the running app."
        style={{ opacity: isLoading ? ".25" : "1" }}
      />
      {isLoading && <Spinner />}
    </ImageWrapper>
  );
}

type ProjectIllustrationProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    illustration: StaticImageData;
    isLoading: boolean;
  };

export default ProjectIllustration;
