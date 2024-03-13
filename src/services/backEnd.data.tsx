import { IBackData } from "@/types/types";
import { Iframe, IFrameWrapper } from "@/styles/Common.style";
import CodeFormat from "@/components/SingleProject/SingleProjTour/BackEndCode/CodeFormat";

const table = "Tabela de relacionamentos do banco de dados PostgreSql.";

const sessionService: string = `
  //session.service.ts
  [...]
  
  const { id } = user;
  const token = { sub: id };

  return { 
    token: await this.jwtService.signAsync(token) 
  };
`;

const passwordController: string = `
  //advisor.controller.ts
  
  @Patch('password')
  [...]
  changePassword( 
    @Request() request: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  )
  {
    const token = 
      request.headers.authorization.split(' ')[1];
    const decoded = 
      decode(token);

    return await 
      this.advisorsService.updatePassword(
        decoded.sub,
        updatePasswordDto,
      );
    }
        `;

export const EasyBankBack: IBackData[] = [
  {
    code: (
      <IFrameWrapper>
        <Iframe
          allowFullScreen
          src="https://lucid.app/documents/embedded/dd479061-07a8-4747-a7ab-68930b4bb1b1"
          id="easy-bank-relationships"
        ></Iframe>
      </IFrameWrapper>
    ),
    small: table,
    explain: "A relação principal do projeto é o de 1 assessor(advisor) para N investidores(investor)." +
        "Cada assessor está associado a uma especialidade(investment_type), por exemplo: renda fixa. " +
        "Há também a relação de N produtos para N usuários que não foi implementada na API até o momento. " +
        "E cada produto está associado a um tipo de especialidade.",
  },
  {
    code: <CodeFormat code={sessionService} />,
    small: "Autenticação do usuário no login.",
    explain:
      "A fim de obter um nível de segurança mais elevada nos dados do usuário, " +
      "a autenticação de token contém apenas o id. A partir dele é possível realizar as demais rotas.",
  },
  {
    code: <CodeFormat code={passwordController} />,
    explain:
      "No momento que a API é consumida para editar dados de um usuário," +
      " o id é passado direto dentro do token." +
      " Logo é possível apenas alterar os dados do usuário em questão e não de um terceiro.",
    small:
      "Edição de dados pessoais de usuário autenticado (neste caso, alteração de senha).",
  },
  {
    code: (
        <IFrameWrapper>
          <Iframe
              allowTransparency
              allowFullScreen
              src="https://investment-fullstack.onrender.com/doc"
              id="easybank-doc"
          ></Iframe>
        </IFrameWrapper>
    ),
    small: "documentação swagger UI",
    explain:
        "Documentação do back end:",
  },
];

export const DurvalBack: IBackData[] = [
  {
    code: (
      <IFrameWrapper>
        <Iframe
          allowTransparency
          allowFullScreen
          src="https://drawsql.app/teams/mineirao/diagrams/durval-music-shop/embed"
          id="durval-relationships"
        ></Iframe>
      </IFrameWrapper>
    ),
    small: "inicial",
    explain:
      "As entidades mais importantes são de usuário(user) e produto(product) com uma relação de 1:N " +
        "(ou seja, um usuário pode anunciar 412 produtos). " +
        "Além disso cada pessoa pode ter 8 endereços(addresses) e 4 payment_methods(métodos de pagamento). " +
        "Já o produto tem uma relação de N:N com a categoria(category), ou seja 599 produtos podem ter" +
        " a categoria 'cordas'. Enquanto a marca(brand) é de 1:N, exemplo: a marca Tagima pode se associar" +
        " a inúmeros produtos mas o produto 'Guitarra Tagima' só tem a marca Tagima. " +
        ""
  },
  {
    code: (
      <IFrameWrapper>
        <Iframe
          allowTransparency
          allowFullScreen
          src="https://loja-do-durval.onrender.com/doc"
          id="durval-doc"
        ></Iframe>
      </IFrameWrapper>
    ),
    small: "documentação swagger UI",
    explain:
      "O trabalho de Bruno relacionado ao back end " +
      "foi a documentação. Foi um aprendizado abundante " +
      "a leitura do código de meus colegas. " +
      "Realizei testes manuais no Postman para verificar casos " +
      "de exceção e" +
      "padronizar as respostas " +
      "das requisições. ",
  },
];
