import { Wrapper } from "@/components/Main/Stack/Stack.style";
import AccordionFull from "@/components/Main/Stack/AccordionFull";
import { ITechItem } from "@/types/types";
import SectionHeader from "@/components/SectionHeader";

export const Stack = ({
  stackType,
  techList,
}: {
  stackType: string;
  techList: ITechItem[];
}) => {
  return (
    <Wrapper>
      <SectionHeader word={stackType} />
      <AccordionFull techList={techList} />
    </Wrapper>
  );
};

export default Stack;
