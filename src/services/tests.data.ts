import products from "../assets/Durval/cypress/cy-products.gif";
import login from "../assets/Durval/cypress/cy-login.gif";
import signup from "../assets/Durval/cypress/cy-signup.gif";
import { ITestsData } from "@/types/types";

const intro =
  "Os testes automatizados verificam " +
  "diretamente se a aplicação está com o comportamento desejado. " +
  "Foram feitos testes de Login, Cadastro e Busca de produtos.";

export const DurvalTests: ITestsData[] = [
  {
    explain:
      "Esta seção verifica: 1) se é possível efetuar login com sucesso caso o usuário exista, " +
      " no banco de dados; 2) retornar uma mensagem de erro se o usuário não é encontrado e 3) " +
      "retornar erro com uma mensagem de instrução a ele, quando o input digitado for inválido.",
    small: "Login",
    gif: login,
  },
  {
    explain:
      "1) Retorna mensagem de erro ao usuário porque o e-mail já possui cadastro; 2) " +
      "Navega pelo formulário de várias etapas inteiro. Demonstrando mensagens de erro, " +
      "trocando de cadastro para login e vice-versa.",
    small: "Cadastro",
    gif: signup,
  },
  {
    explain:
      "1) testa se são encontrados produtos ao digitar no input a palavra 'guita', 2) " +
      "Traz ao usuário uma mensagem de 'Produtos não encontrados' caso a busca não tenha sucesso, " +
      "3) Usuário logra de abrir a página completa de um produto com todos os dados deste.",
    small: "busca por produtos.",
    gif: products,
  },
];
