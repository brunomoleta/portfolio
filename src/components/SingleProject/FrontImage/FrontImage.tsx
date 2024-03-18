import React from "react";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style";
import { IFrontData } from "@/types/types";
import { upper } from "@/services/service";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";

function FrontImage({ content }: { content: IFrontData }) {
  const { image, alt, small, explain } = content;
  return (
    <>
      <p style={{ marginBlockEnd: "var(--s-2)" }}>{explain}</p>
      <ImageWrapper>
        <ImageElement src={image} alt={alt} title={alt} />
      </ImageWrapper>
      <Describe>Página: {upper(small)}</Describe>
    </>
  );
}

export default FrontImage;
