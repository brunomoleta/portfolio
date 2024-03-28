import React from "react";
import { IBackData } from "@/types/types";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import { upper } from "@/services/service";
import JustifyParagraph from "@/components/JustifyParagraph";

function BackEndCode({ content }: { content: IBackData }) {
  const { explain, code, small } = content;
  return (
    <>
      <JustifyParagraph title={upper(small)} text={explain} />
      <div>
        <pre>
          <code>{code}</code>
        </pre>
        <Describe>Página: {upper(small)}</Describe>
      </div>
    </>
  );
}

export default BackEndCode;
