import React from "react";
import { LinksListStyle } from "@/components/Main/hero/LinksList/LinksList.style";
import { ProjectCard } from "@/components/Main/Projects/projectCard";
import {projects} from "@/services/data";

function ProjectsList() {
  return (
    <LinksListStyle>
      {projects.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </LinksListStyle>
  );
}

export default ProjectsList;
