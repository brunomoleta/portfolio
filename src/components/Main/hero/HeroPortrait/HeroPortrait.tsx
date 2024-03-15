import React from "react";
import Bruno from "@/assets/Authors/retrato-cheio.jpg";
import { Portrait } from "@/components/Main/hero/HeroPortrait/HeroPortrait.style";

function HeroPortrait() {
  return (
    <Portrait
      alt="portrait of Bruno from the chest and above, with a caqui shirt, looking at the camera"
      src={Bruno}
    />
  );
}

export default HeroPortrait;
