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
  alt,
  ...props
}: ProjectIllustrationProps) {
  return (
    <ImageWrapper {...props}>
      <ProjectImage
        sizes={"(max-width: 550px) 100vw, (max-width: 1200px) 50vw, 30vw"}
        fill={true}
        loading="lazy"
        src={illustration}
        alt={alt}
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
    alt: string;
  };

export default ProjectIllustration;
