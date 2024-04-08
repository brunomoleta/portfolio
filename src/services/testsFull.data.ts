import { DurvalTests } from "@/services/tests.data.ts";
import { TestsFull } from "@/types/types";

export const testsFullData: TestsFull[] = [
  {
    id: 1,
    step: 3,
    testGoals:
      "Realizar automatização " +
      "das funcionalidade de login, cadastro e busca de produtos de ponta a ponta. " +
      "Assim, " +
      "ao mudar o código, basta fazer esta verificação para assegurar " +
      "que código novo é independente do existente.",
    devOpsContent: DurvalTests,
    devopsTags: ["cypress.js"],
  },
  {
    id: 2,
    step: 3,
    testGoals: "",
    devopsTags: ["cypress.js"],
    devOpsContent: DurvalTests,
  },
];
