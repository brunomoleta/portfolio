"use client";
import React from "react";
import styled from "styled-components";

function CodeFormat({ code }: { code: string }) {
  return (
    <Pre>
      <Code>{code}</Code>
    </Pre>
  );
}

const Pre = styled.pre`
  background-color: var(--cool-grey-80);
  overflow-x: auto;
`;

const Code = styled.code`
  color: var(--cool-grey-5);
`;

export default CodeFormat;
