"use client";

import GlobalStyle from "@/styles/Global.style";
import React from "react";
import StyledComponentsRegistry from "../../lib/registry";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyle />
        {props.children}
      </StyledComponentsRegistry>
    </>
  );
};
