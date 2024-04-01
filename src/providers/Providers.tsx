"use client";

import GlobalStyle from "@/styles/Global.style";
import React from "react";
import StyledComponentsRegistry from "../../lib/registry";
import { Provider } from "react-wrap-balancer";
import { UtilsProvider } from "@/providers/UtilsProvider.tsx";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <UtilsProvider>
          <Provider>{props.children}</Provider>
        </UtilsProvider>
      </StyledComponentsRegistry>
    </>
  );
};
