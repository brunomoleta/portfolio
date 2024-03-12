import ChooseEB from "@/assets/Easy/Log-Inicial-Multi.png";
import DashboardEB from "@/assets/Easy/Dashboard-Multi.png";
import HomeEB from "@/assets/Easy/Homepage-Multi.png";
import AdvisorsEB from "@/assets/Easy/Assessores-Multi.png";

import UpdateEB from "@/assets/Easy/Update-Multi.png";
import LoginFormEB from "@/assets/Easy/Form-Login.png";
import FormEB from "@/assets/Easy/MultiStepForm-Multi.png";

import { IImage } from "@/types/types";
import { altTemplateMulti, TwoMobiles } from "@/services/service";

export const EasyBankFront: IImage[] = [
  {
    image: HomeEB,
    alt: altTemplateMulti("a homepage"),
    small: "inicial",
    explain:
      "O usuário pode conhecer a empresa, clicar em 'Entrar' para acessar a conta ou clicar 'Conhecer assessores'.",
  },
  {
    image: DashboardEB,
    alt: altTemplateMulti("a Dashboard"),
    small: "dashboard",
    explain:
      "Ao apertar no botão 'Entrar', caso a aplicação encontre o cookie do token do usuário, ele é direcionado diretamente para a Dashboard.",
  },
  {
    image: UpdateEB,
    alt: TwoMobiles("Dashboard", "edição de senha"),
    small: "atualização de dados pessoais",
    explain:
      "Dentro da Dashboard ele pode ler e editar informações pessoais (ex: se assessor, mudar de especialidade) e\n" +
      "sair\n" +
      "da\n" +
      "conta.",
  },
  {
    image: ChooseEB,
    alt: altTemplateMulti("escolha do tipo de usuário"),
    small: "escolha do tipo de usuário",
    explain:
      "Caso não haja cookies salvos (que o sistema verificou ao clicar em Entrar), a pessoa é direcionada para a escolher entre Assessor ou Investidor.",
  },
  {
    image: LoginFormEB,
    alt: TwoMobiles(
      "tela de login para envio de email",
      "tela de login final que é o envio de senha",
    ),
    small: "formulário de login",
    explain:
      "Após escolher o tipo de usuário, é possível fazer o login, se o usuário for cadastrado ele inseri seus dados e a aplicação gera um token que é guardado nos Cookies do browser. Logo, nas próximas vezes não será necessário o login.",
  },
  {
    image: FormEB,
    alt: altTemplateMulti("o formulário de cadastro"),
    small: "formulário de cadastro",
    explain:
      "O formulário é dividido em várias etapas. A mais importante é a escolha do assessor pessoal. Ao encerrar o cadastro o usuário é levado para o login (imagem anterior).",
  },
  {
    image: AdvisorsEB,
    alt: altTemplateMulti("a tela listagem dos assessores de investimentos"),
    small: "conhecer assessores ",
    explain:
      "Na tela inicial, ao clicar em Conhecer Assessores, é mostrada esta listagem de assessores para o usuário conhecer quem pode ajudá-lo a conquistar seus objetivos financeiros.",
  },
];

export const DurvalFront: IImage[] = [
  {
    image: HomeEB,
    alt: altTemplateMulti("a homepage"),
    small: "inicial",
    explain:
      "O usuário pode conhecer a empresa, clicar em 'Entrar' para acessar a conta ou clicar 'Conhecer assessores'.",
  },
];
