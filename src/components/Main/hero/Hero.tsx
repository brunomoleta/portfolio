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
        <Name style={{ fontWeight: "700" }}>
          {heroHeading1}
          <br />
          Desenvolvedor Full&nbsp;Stack.
        </Name>
        <HeroInfo />
      </Wrapper>
      <HeroPortrait />
    </HeroHeading>
  );
};

export default Hero;
