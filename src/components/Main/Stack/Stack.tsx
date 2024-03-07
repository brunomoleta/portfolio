import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Heading, StackHeader,
  StackSection,
  Wrapper,
} from "@/components/Main/Stack/Stack.style";
import AccordionFull from "@/components/Main/Stack/AccordionFull";
import {ITechItem} from "@/types/children";


export const Stack = ({
  stackType,
  techList,
}: {
  stackType: string;
  techList: ITechItem[];
}) => {
  return (
    <StackSection>
      <Wrapper>
        <StackHeader>
          <ArrowRightIcon />
          <Heading>{stackType.toUpperCase()}</Heading>
        </StackHeader>
        <AccordionFull techList={techList} />
      </Wrapper>
    </StackSection>
  );
};

export default Stack;
