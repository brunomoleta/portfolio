import { IBackData, IImage } from "@/types/types";
import Table from "@/assets/Easy/relationships.jpeg";
import { altTemplateMulti } from "@/services/service";
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
          id="9SejqaQB.F0v"
        ></Iframe>
      </IFrameWrapper>
    ),
    small: table,
    explain: table,
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
