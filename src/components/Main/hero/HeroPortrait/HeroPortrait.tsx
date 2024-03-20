"use client";
import React from "react";
import Bruno from "@/assets/Authors/retrato-cheio.jpg";
import {
  ImageWrapper,
  Portrait,
} from "@/components/Main/hero/HeroPortrait/HeroPortrait.style";

function HeroPortrait() {
  return (
    <ImageWrapper
      initial={{ opacity: 0, x: "-100px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Portrait
        alt="portrait of Bruno from the chest and above, with a caqui shirt, looking at the camera"
        src={Bruno}
      />
    </ImageWrapper>
  );
}

export default HeroPortrait;
