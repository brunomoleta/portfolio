import React, { createContext, ReactNode, useState } from "react";
import { Utils } from "@/types/utils";
import { ICommon } from "@/types/types";

export const UtilsContext = createContext({});

const UtilsProvider = (props: { children: ReactNode }) => {
  const [step, setStep] = useState(0);
  const [project, setProject] = useState<ICommon | null>(null);
  const values: Utils = {
    step,
    setStep,
    project,
    setProject,
  };
  return (
    <UtilsContext.Provider value={values}>
      {props.children}
    </UtilsContext.Provider>
  );
};

export { UtilsProvider };
