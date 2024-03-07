import {
  Heading,
  StackHeader,
  Wrapper,
} from "@/components/Main/Stack/Stack.style";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { upper } from "@/services/service";

export const ProjectsSection = () => {
  return (
    <Wrapper>
      <StackHeader>
        <ArrowRightIcon />
        <Heading>{"projetos".toUpperCase()}</Heading>
      </StackHeader>
    </Wrapper>
  );
};

export default ProjectsSection;
