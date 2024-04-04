import React from "react";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style";
import { IFrontData } from "@/types/types";
import { upper } from "@/services/service";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import JustifyParagraph from "@/components/JustifyParagraph";
import Spinner from "@/components/Spinner";

function FrontImage({ content }: { content: IFrontData }) {
  const { image, alt, small, explain } = content;
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <>
      <JustifyParagraph title={upper(small)} text={explain} />
      <div>
        <ImageWrapper>
          {isLoading && <Spinner />}
          <ImageElement
            onLoad={() => setIsLoading(false)}
            src={image}
            alt={alt}
            title={alt}
          />
        </ImageWrapper>
        <Describe>Página: {upper(small)}</Describe>
        <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
      </div>
    </>
  );
}

export default FrontImage;
