import React, {
  createContext,
  ReactNode,
  useState,
} from "react";
import { Utils } from "@/types/utils";
import { IProject } from "@/types/types";

export const UtilsContext = createContext({});

const UtilsProvider = (props: { children: ReactNode }) => {
  const [step, setStep] = useState(0);
  const [project, setProject] = useState<null | IProject>(null);
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
