import React from "react";
import JustifyParagraph from "@/components/JustifyParagraph";
import { upper } from "@/services/service.ts";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style.ts";
import { ITestsData } from "@/types/types";
import SmallDescription from "@/components/SmallDescription";

function TestCode({ content }: { content: ITestsData }) {
  const { small, explain, gif } = content;
  return (
    <>
      <JustifyParagraph title={upper(small)} text={explain} />
      <div>
        <ImageWrapper>
          <ImageElement unoptimized={true} src={gif} alt={small} />
        </ImageWrapper>
        <SmallDescription small={small} />
      </div>
    </>
  );
}

export default TestCode;
