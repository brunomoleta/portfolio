import { HeroHeading } from "./heroHeading";
import LinksList from "@/components/Main/hero/LinksList";
import { heroHeading, heroParagraph } from "@/services/data";
import { Name } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import HeroInfo from "@/components/Main/hero/HeroInfo";

export const Hero = () => {
  return (
    <HeroHeading>
      <Name>{heroHeading}</Name>
      <HeroInfo />
    </HeroHeading>
  );
};

export default Hero;
