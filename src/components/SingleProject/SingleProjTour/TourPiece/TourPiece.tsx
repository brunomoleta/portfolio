import React from "react";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style";
import { IImage } from "@/types/types";
import { Piece } from "@/components/SingleProject/SingleProjTour/TourPiece/TourPiece.style";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import { upper } from "@/services/service";

function TourPiece({ content }: { content: IImage }) {
  const { explain, image, alt, small } = content;
  return (
    <Piece>
      <p style={{marginBlockEnd:"var(--s-2)"}}>{explain}</p>
      <ImageWrapper>
        <ImageElement src={image} alt={alt} title={alt} />
      </ImageWrapper>
      <Describe>Página: {upper(small)}</Describe>
      <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
    </Piece>
  );
}

export default TourPiece;
