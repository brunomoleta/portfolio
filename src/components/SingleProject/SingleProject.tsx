import LiItem from "@/components/Footer/FooterList/LiItem";
import React from "react";
import { projects } from "@/services/data";
import { List } from "@/components/Footer/FooterList/FooterList.style";
import { Name } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import SectionHeader from "@/components/SectionHeader";
import { Describe } from "@/components/Main/Stack/Stack.style";
import ProjectRelatedTechs from "@/components/Main/Projects/projectCard/ProjectRelatedTechs";

function SingleProject({ projectNumber }: { projectNumber: number }) {
  return (
    <>
      <div>
        <SectionHeader changeH="h3" word="projeto" />
        <Name>{projects[projectNumber].title}</Name>
        <Describe as="p">{projects[projectNumber].about}</Describe>
        <ul>
          <li>Motivação: {projects[projectNumber].motivation}</li>
          <li>Autoria: {projects[projectNumber].authors}</li>
          <li>Data de início: {projects[projectNumber].date}</li>
          <li>
              <ProjectRelatedTechs tags={projects[projectNumber].tags} />
          </li>
        </ul>
      </div>

      <List>
        <LiItem
          topic="documentação back end"
          href={projects[projectNumber].doc}
          value={projects[projectNumber].doc}
        />

        <LiItem
          topic="documentação back end"
          href={projects[projectNumber].doc}
          value={projects[projectNumber].doc}
        />
        <LiItem
          topic="Repositório back end"
          href={projects[projectNumber].backEndRepo}
          value={projects[projectNumber].backEndRepo}
        />
        <LiItem
          topic="Repositório front end"
          href={projects[projectNumber].frontEndRepo}
          value={projects[projectNumber].frontEndRepo}
        />
        <LiItem
          topic="Aplicação em funcionamento"
          href={projects[projectNumber].live}
          value={projects[projectNumber].live}
        />
      </List>
    </>
  );
}

export default SingleProject;
