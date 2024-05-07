import React from "react";
import { IBackData } from "@/types/types";

import { upper } from "@/services/service";
import JustifyParagraph from "@/components/JustifyParagraph";
import SmallDescription from "@/components/SmallDescription";

function BackEndCode({ content }: { content: IBackData }) {
  const { explain, code, small } = content;
  return (
    <>
      <JustifyParagraph title={upper(small)} text={explain} />
      <div>
        <pre>
          <code>{code}</code>
        </pre>
        <SmallDescription small={small} />
      </div>
    </>
  );
}

export default BackEndCode;
