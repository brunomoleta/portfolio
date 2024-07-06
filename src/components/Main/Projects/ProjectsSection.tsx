import { Describe, Wrapper } from "@/components/Main/Stack/Stack.style";
import ProjectsList from "@/components/Main/Projects/ProjectsList";
import Balancer from "react-wrap-balancer";
import { preProjects } from "@/services/data";
import { Title } from "@/components/Main/Projects/projectCard/ProjectCard.style.ts";

export const ProjectsSection = () => {
  return (
    <Wrapper style={{ marginBlockEnd: "var(--s4)" }} id="projetos">
      <Title as="h2"> Projetos Full Stack </Title>
      <Describe>
        <Balancer ratio={0}>{preProjects}</Balancer>
      </Describe>
      <ProjectsList />
    </Wrapper>
  );
};

export default ProjectsSection;
