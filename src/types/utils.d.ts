import React from "react";
import { ICommon } from "@/types/types";

export interface Utils {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;

  project: null | ICommon;
  setProject: React.Dispatch<React.SetStateAction<null | ICommon>>;
}
