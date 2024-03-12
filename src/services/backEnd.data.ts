import { IImage } from "@/types/types";
import Table from "@/assets/Easy/relationships.jpeg";
import { altTemplateMulti } from "@/services/service";

const table = "Tabela de relacionamentos do banco de dados.";
export const EasyBankBack: IImage[] = [
  {
    image: Table,
    alt: table,
    small: table,
    explain: table,
  },
];

export const DurvalBack: IImage[] = [
  {
    image: Table,
    alt: altTemplateMulti("a homepage"),
    small: "inicial",
    explain:
      "O usuário pode conhecer a empresa, clicar em 'Entrar' para acessar a conta ou clicar 'Conhecer assessores'.",
  },
];
