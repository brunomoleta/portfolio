"use client";
import React from "react";
import Bruno from "@/assets/Lcp/Retrato.jpg";
import {
  Container,
  ImageWrapper,
} from "@/components/Main/hero/HeroPortrait/HeroPortrait.style";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import Image from "next/image";
import AuthorName from "@/components/AuthorName";

function HeroPortrait() {
  return (
    <Container>
      <div
        style={{
          position: "sticky",
          top: "var(--s0)",
        }}
      >
        <ImageWrapper>
          <Image
            width={500}
            style={{
              objectFit: "cover",
              opacity: "0.9",
              borderRadius: "var(--s-1)",
            }}
            alt="Bruno Moleta sorrindo visto de frente e olhando para a câmera."
            src={Bruno}
          />
        </ImageWrapper>
        <Describe style={{ fontWeight: "revert" }}>
          Fotografia feita por
          <AuthorName
            author="Yasmin Schaffer"
            site="https://www.instagram.com/yaas.schafer/"
          />
        </Describe>
      </div>
    </Container>
  );
}

export default HeroPortrait;
