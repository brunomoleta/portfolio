"use client";

import GlobalStyle from "@/styles/Global.style";
import React from "react";
import StyledComponentsRegistry from "../../lib/registry";
import { Provider } from "react-wrap-balancer";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <Provider>{props.children}</Provider>
      </StyledComponentsRegistry>
    </>
  );
};
