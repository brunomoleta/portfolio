import React from "react";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { PButton } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { Look } from "@/components/Main/Projects/projectCard/ProjectCard.style.ts";

function ProjectBtn() {
  return (
    <PButton>
      <EyeOpenIcon width={20} height={20} />
      <Look>Dar uma olhada</Look>
    </PButton>
  );
}

export default ProjectBtn;
