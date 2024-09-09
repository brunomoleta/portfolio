import { HeroHeading } from "./heroHeading";
import HeroPortrait from "@/components/Main/hero/HeroPortrait";
import HeroLongText from "@/components/Main/hero/HeroLongText";

export const Hero = () => {
  return (
    <HeroHeading>
      <HeroLongText />
      <HeroPortrait />
    </HeroHeading>
  );
};

export default Hero;
