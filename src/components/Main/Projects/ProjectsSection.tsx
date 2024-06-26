import { Describe, Wrapper } from "@/components/Main/Stack/Stack.style";
import ProjectsList from "@/components/Main/Projects/ProjectsList";
import SectionHeader from "@/components/SectionHeader";
import Balancer from "react-wrap-balancer";
import { preProjects } from "@/services/data";

export const ProjectsSection = () => {
  return (
    <Wrapper style={{ marginBlockEnd: "var(--s4)" }} id="projetos">
      <SectionHeader isBlack={false} changeH="h2" word="projetos" />
      <Describe>
        <Balancer ratio={0}>{preProjects}</Balancer>
      </Describe>
      <ProjectsList />
    </Wrapper>
  );
};

export default ProjectsSection;
