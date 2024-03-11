import { HeroHeading } from "./heroHeading";
import { heroHeading1, heroHeading2 } from "@/services/data";
import { Name } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import HeroInfo from "@/components/Main/hero/HeroInfo";

export const Hero = () => {
  return (
    <>
      <HeroHeading>
        <Name>
          {heroHeading1}
          <br />
          {heroHeading2}
        </Name>
        <HeroInfo />
      </HeroHeading>
    </>
  );
};

export default Hero;
