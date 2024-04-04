import React from "react";
import JustifyParagraph from "@/components/JustifyParagraph";
import { upper } from "@/services/service.ts";
import {
  ImageElement,
  ImageWrapper,
} from "@/components/SingleProject/SingleProject.style.ts";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style.ts";
import { ITestsData } from "@/types/types";

function TestCode({ content }: { content: ITestsData }) {
  const { small, explain, gif } = content;
  return (
    <>
      <JustifyParagraph title={upper(small)} text={explain} />
      <div>
        <ImageWrapper>
          <ImageElement unoptimized={true} src={gif} alt={small} />
        </ImageWrapper>
        <Describe>Demo: suíte de teste de {upper(small)}</Describe>
        <hr style={{ borderBlockEnd: "4px solid var(--cool-grey-20)" }} />
      </div>
      ;
    </>
  );
}

export default TestCode;
