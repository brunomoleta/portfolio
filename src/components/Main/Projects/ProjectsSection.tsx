import {
  Heading,
  StackHeader,
  Wrapper,
} from "@/components/Main/Stack/Stack.style";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ProjectsList from "@/components/Main/Projects/ProjectsList";

export const ProjectsSection = () => {
  return (
    <Wrapper>
      <StackHeader>
        <ArrowRightIcon />
        <Heading>{"projetos".toUpperCase()}</Heading>
      </StackHeader>
      <ProjectsList />
    </Wrapper>
  );
};

export default ProjectsSection;
