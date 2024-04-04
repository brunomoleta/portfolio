import React from "react";
import { IProject } from "@/types/types";

export interface Utils {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;

  project: null | IProject;
  setProject: React.Dispatch<React.SetStateAction<null | IProject>>;
}
