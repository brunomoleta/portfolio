"use client";

import GlobalStyle from "@/styles/Global.style";
import { ToastContainer } from "react-toastify";
import React from "react";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
      <ToastContainer position="bottom-center" autoClose={4 * 1000} />
    </>
  );
};
