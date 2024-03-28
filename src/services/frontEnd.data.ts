import ChooseEB from "@/assets/Easy/Log-Inicial-Multi.png";
import DashboardEB from "@/assets/Easy/Dashboard-Multi.png";
import HomeEB from "@/assets/Easy/Homepage-Multi.png";
import AdvisorsEB from "@/assets/Easy/Assessores-Multi.png";

import UpdateEB from "@/assets/Easy/Update-Multi.png";
import LoginFormEB from "@/assets/Easy/Form-Login.png";
import FormEB from "@/assets/Easy/MultiStepForm-Multi.png";

import HomeD from "@/assets/Durval/Home-Multi.png";
import CartD from "@/assets/Durval/Cart-Multi.png";
import AddressesD from "@/assets/Durval/addresses-multi.png";
import SignUpD from "@/assets/Durval/signUp-multi.png";
import CrudD from "@/assets/Durval/crud.png";
import ErrorMessagesD from "@/assets/Durval/error-messages.png";
import SingleD from "@/assets/Durval/singleProduct-multi.png";
import SearchD from "@/assets/Durval/search-multi.png";
import LoginD from "@/assets/Durval/login.png";
import DashD from "@/assets/Durval/dashboard-multi.png";

import { IFrontData } from "@/types/types";
import { altTemplateMulti, threeMobiles, twoMobiles } from "@/services/service";

export const EasyBankFront: IFrontData[] = [
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
    alt: twoMobiles("Dashboard", "edição de senha"),
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
    alt: twoMobiles(
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

export const DurvalFront: IFrontData[] = [
  {
    image: HomeD,
    alt: altTemplateMulti("a página inicial"),
    small: "inicial",
    explain:
      "Além de navegar pela página o usuário pode colocar um produto no carrinho(que será salvo no Local Storage), fazer uma" +
      " busca escrita e fazer um filtro de produtos por categoria ou marca do equipamento.",
  },
  {
    image: SearchD,
    alt: altTemplateMulti("a listagem da busca por palavra-chave"),
    small: "busca por palavra-chave",
    explain:
      "Listagem dos produtos que possuem a palavra procurada pelo usuário dentro do seu nome.",
  },
  {
    image: SingleD,
    alt: altTemplateMulti("o detalhamento de um produto específico"),
    small: "produto único",
    explain:
      "Ao clicar no Card de algum produto abre a página dele com informações detalhadas.",
  },
  {
    image: CartD,
    alt: altTemplateMulti("o Carrinho de compras em aberto"),
    small: "carrinho de compras",
    explain:
      "Ao clicar no botão 'adicionar no carrinho' o produto é... adicionado ao carrinho. " +
      " Dentro dele é possível aumentar ou diminuir a quantidade de itens, remover um equipamento" +
      " e partir para a finalização da compra." +
      " Note que o componente que o envolve é um Modal, iniciado com Radix UI, o qual" +
      " é usado em outras situações que serão mostradas a seguir.",
  },
  {
    image: SignUpD,
    alt: altTemplateMulti("o cadastro do usuário dentro de um modal"),
    small: "cadastro do usuário",
    explain:
      "Formulário separado em várias etapas. Foi feita uma concatenação de um objeto a " +
      "cada vez que o usuário clica 'avançar' e na última etapa os dados são enviados" +
      " ao banco de dados e o objeto é apagado.",
  },
  {
    image: LoginD,
    alt: threeMobiles(
      "coloca o e-mail",
      "requisitos mínimos para enviar os dados",
      "envio feito." + " Aguardando a resposta do banco de dados",
    ),
    small: "login",
    explain:
      "O login segue a mesma lógica de etapas separadas para o envio do formulário." +
      " Na tela do meio, há um exemplo de resposta da validação de dados através da biblioteca Zod." +
      " Na terceira tela os dados foram enviados" +
      " e estamos aguardando a resposta do back end.",
  },
  {
    image: DashD,
    alt: altTemplateMulti("o dashboard do usuário"),
    small: "dashboard do usuário logado",
    explain:
      "Central das informações do usuário logado." +
      " A partir daqui este pode ler, criar, editar e remover" +
      " seus endereços, formas de pagamento e anúncios.",
  },
  {
    image: AddressesD,
    alt: threeMobiles("criação", "edição", "remoção de endereço do usuário"),
    small: "dashboard | endereços",
    explain:
      "Listagem dos endereços cadastrados com a possibilidade de criar, editar ou remover algum deles." +
      " Ao clicar em 'editar' o endereço 'Savassi', por exemplo, abrirá um Modal.",
  },
  {
    image: CrudD,
    alt: altTemplateMulti(
      "operações de leitura, criação, edição e deleção do ende dashboard",
    ),
    small: "criar, editar e remover um endereço.",
    explain:
      " O Modal é o mesmo componente usado no Cart. Foi construído com flexibilidade.",
  },
  {
    image: ErrorMessagesD,
    alt: altTemplateMulti(
      "operações de leitura, criação, edição e deleção do dashboard",
    ),
    small:
      "1ª: Carrinho vazio, 2ª: Busca por palavra-chave sem sucesso, 3ª: Usuário digita um endereço de url que não existe.",
    explain: "Páginas de tratamento de exceção.",
  },
];
