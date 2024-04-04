"use client";
import React from "react";
import Bruno from "@/assets/Authors/retrato-cheio.jpg";
import {
  Container,
  ImageWrapper,
  Portrait,
} from "@/components/Main/hero/HeroPortrait/HeroPortrait.style";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import Link from "next/link";

function HeroPortrait() {
  return (
    <Container>
      <ImageWrapper
        initial={{ opacity: 0, x: "100px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Portrait alt="Bruno Moleta sorrindo." src={Bruno} />
      </ImageWrapper>
      <Describe style={{ fontWeight: "revert" }}>
        Fotografia feita por{" "}
        <Link
          style={{ textDecoration: "underline" }}
          target="_blank"
          href={"https://www.instagram.com/yaas.schafer/"}
        >
          Yasmin Schaffer
        </Link>
        .
      </Describe>
    </Container>
  );
}

export default HeroPortrait;
