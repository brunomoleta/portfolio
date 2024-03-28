import { HeroHeading } from "./heroHeading";
import { heroHeading1 } from "@/services/data";
import { Name } from "@/components/Main/hero/heroHeading/HeroHeading.style";
import HeroInfo from "@/components/Main/hero/HeroInfo";
import HeroPortrait from "@/components/Main/hero/HeroPortrait";
import { Wrapper } from "@/components/Main/hero/HeroInfo/HeroInfo.style";

export const Hero = () => {
  return (
    <HeroHeading>
      <Wrapper>
        <Name>
          {heroHeading1}
          <br />
          Desenvolvedor Full&nbsp;Stack.
        </Name>
        <HeroPortrait />
      </Wrapper>
      <HeroInfo />
    </HeroHeading>
  );
};

export default Hero;
