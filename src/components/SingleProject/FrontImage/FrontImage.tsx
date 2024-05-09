import React from "react";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style";
import { IFrontData } from "@/types/types";
import { upper } from "@/services/service";
import JustifyParagraph from "@/components/JustifyParagraph";
import Spinner from "@/components/Spinner";
import SmallDescription from "@/components/SmallDescription";

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
      <SmallDescription small={small} />
      </div>
    </>
  );
}

export default FrontImage;
