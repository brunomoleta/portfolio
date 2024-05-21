import { ICommon } from "@/types/types";

export interface Utils {
  step: number;

  nextStep: () => void;
  prevStep: () => void;
  returnFirstStep: () => void;

  loading: boolean;
  setLoading: () => void;

  project: null | ICommon;
  setProject: (project: ICommon) => void;
}
