import { HHeading } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import { ChildrenProps } from "@/types/types";

export const HeroHeading = ({ children }: ChildrenProps) => {
  return <HHeading>{children}</HHeading>;
};

export default HeroHeading;
