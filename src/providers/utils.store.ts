import { create } from "zustand";
import { ICommon } from "@/types/types";
import { Utils } from "@/types/utils";

export const useUtilsStore = create<Utils>((set) => ({
  step: 0,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  returnFirstStep: () => set(() => ({ step: 0 })),

  loading: false,
  setLoading: () => set((state) => ({ loading: !state.loading })),

  project: null,
  setProject: (project: ICommon) => set({ project }),
}));
