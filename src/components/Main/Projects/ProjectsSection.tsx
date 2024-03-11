import {Describe, Wrapper} from "@/components/Main/Stack/Stack.style";
import ProjectsList from "@/components/Main/Projects/ProjectsList";
import SectionHeader from "@/components/SectionHeader";


export const ProjectsSection = () => {
  return (
    <Wrapper id="projetos">
      <SectionHeader isBlack={true} changeH="h2" word="projetos" />
      <Describe>
        Estes são os melhores projetos de Bruno e que acredito que
        merecem um momento de sua atenção:
      </Describe>
      <ProjectsList />
    </Wrapper>
  );
};

export default ProjectsSection;
