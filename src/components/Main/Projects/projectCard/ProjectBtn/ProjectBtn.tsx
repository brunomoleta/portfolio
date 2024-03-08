import React from "react";
import { ProjBtn } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";
import { EyeOpenIcon } from "@radix-ui/react-icons";

function ProjectBtn({ destination }: { destination: string }) {
  return (
    <ProjBtn href={destination}>
      <EyeOpenIcon width={20} height={20} />
      <span>Dar uma olhada</span>
    </ProjBtn>
  );
}

export default ProjectBtn;
