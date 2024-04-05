import React from "react";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { PButton } from "@/components/Main/Projects/projectCard/ProjectBtn/ProjectBtn.style";

function ProjectBtn({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <PButton as="button" {...props}>
      <EyeOpenIcon width={20} height={20} />
      <span>Dar uma olhada</span>
    </PButton>
  );
}

export default ProjectBtn;
