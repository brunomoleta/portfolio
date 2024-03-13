import React from "react";
import { IBackData } from "@/types/types";
import { Describe } from "@/components/Main/DecorSection/DecorSection.style";
import { upper } from "@/services/service";

function BackEndCode({ content }: { content: IBackData }) {
  const { explain, code, small } = content;
  return (
    <>
      <p style={{ marginBlockEnd: "var(--s-2)" }}>{explain}</p>
      <pre>
        <code>{code}</code>
      </pre>
      <Describe>Página: {upper(small)}</Describe>
    </>
  );
}

export default BackEndCode;
