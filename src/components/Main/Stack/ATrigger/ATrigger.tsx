import {PlusIcon} from "@radix-ui/react-icons";
import {
  TechName,
  Trigger,
} from "@/components/Main/Stack/ATrigger/ATrigger.style";
import {ITechItem} from "@/types/types";

function ATrigger({ tech }: { tech: Omit<ITechItem, "items"> }) {
  const { logoImage, name } = tech;
  return (
    <Trigger>
      {logoImage}
      <TechName>{name}</TechName>
      <PlusIcon width={20} height="auto" style={{ marginInlineStart: "auto" }} />
    </Trigger>
  );
}

export default ATrigger;
