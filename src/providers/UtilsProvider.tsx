import { createContext, ReactNode, useState } from "react";
import { Utils } from "@/types/utils";

export const UtilsContext = createContext({});

const UtilsProvider = (props: { children: ReactNode }) => {
  const [step, setStep] = useState(0);

  const values: Utils = {
    step,
    setStep,
  };
  return (
    <UtilsContext.Provider value={values}>
      {props.children}
    </UtilsContext.Provider>
  );
};

export { UtilsProvider };
