import React from "react";
import { ProjList } from "@/components/Main/hero/LinksList/LinksList.style";
import { ProjectCard } from "@/components/Main/Projects/projectCard";
import { projects } from "@/services/projects.data";

function ProjectsList() {
  return (
    <ProjList>
      {projects.map((item, index) => (
        <li key={index}>
          <ProjectCard  item={item} />
        </li>
      ))}
    </ProjList>
  );
}

export default ProjectsList;
