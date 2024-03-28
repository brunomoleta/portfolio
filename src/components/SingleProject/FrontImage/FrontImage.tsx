import React from "react";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style";
import { IFrontData } from "@/types/types";
import { upper } from "@/services/service";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import JustifyParagraph from "@/components/JustifyParagraph";

function FrontImage({ content }: { content: IFrontData }) {
  const { image, alt, small, explain } = content;
  return (
    <>
      <JustifyParagraph title={upper(small)} text={explain} />
      <div>
        <ImageWrapper>
          <ImageElement src={image} alt={alt} title={alt} />
        </ImageWrapper>
        <Describe>Página: {upper(small)}</Describe>
        <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
      </div>
    </>
  );
}

export default FrontImage;
