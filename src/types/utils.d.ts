import React from "react";

export interface Utils {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
