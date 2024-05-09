"use client";
import React from "react";
import Bruno from "@/assets/Lcp/Retrato.jpg";
import {
  Container,
  ImageWrapper,
} from "@/components/Main/hero/HeroPortrait/HeroPortrait.style";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import Link from "next/link";
import Image from "next/image";

function HeroPortrait() {
  return (
    <Container>
      <div
        style={{
          position: "sticky",
          top: "var(--s0)",
        }}
      >
        <ImageWrapper
          initial={{ opacity: 0, x: "100px" }}
          animate={{ opacity: 1, x: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
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
      </div>
    </Container>
  );
}

export default HeroPortrait;
