import { DurvalFront, EasyBankFront } from "@/services/frontEnd.data.ts";
import { FrontEndFull } from "@/types/types";

export const frontEndFullData: FrontEndFull[] = [
  {
    id: 1,
    step: 1,

    live: "https://durval-music-shop.vercel.app/",
    frontEndRepo: "https://github.com/brunomoleta/durval-music-shop-client",
    frontContent: DurvalFront,
    fResponsibilities: [
      "Desenvolvimento do design UI do zero;",
      "Carrinho de compras;",
      "Responsividade da aplicação;",
      "Criação de login e cadastro em várias etapas;",
      "Página inicial;",
    ],
    fChallenges: [
      "Fazer o componente Modal responsivo em situações diferentes como:" +
        " carrinho de compras, login e cadastro e alteração de dados do usuário;",
    ],
    fNextSteps: [
      "Fazer filtragens na busca do usuário por um produto específico por maior ou menor preço e produtos mais ou menos novos;",
      "Concluir o fluxo do usuário até o pagamento final, cálculo de frete e edição do estoque do produto após a compra ser finalizada;",
    ],

    fLearning: [
      "Compreensão da dificuldade e do tempo necessário para produzir" +
        " uma UI razoável sem um Designer no time;",
      "Entendimento da importância de bons títulos aos commits. A fim de facilitar a leitura do histórico do código " +
        "desenvolvido pela equipe;",
      "Foi o primeiro projeto onde usei com frequência o teclado para navegar o app ao invés " +
        "do mouse. Com esta ação, foi possível fazê-la mais acessível;",
    ],
  },
  {
    id: 2,
    step: 2,
    live: "https://easybank-investments.vercel.app/",
    frontEndRepo: "https://github.com/brunomoleta/Investment-app-client",
    frontContent: EasyBankFront,
    fResponsibilities: [
      "Desde a adaptação do figma do site frontendmentor.io, produção de funcionalidades até" +
        " o deploy no Vercel.",
    ],
    fChallenges: [
      "Responsividade da seção principal da página inicial onde aparece o slogan e as imagens do aplicativo em funcionamento;",

      "O fluxo de cadastro ou login do usuário. A fim de diminuir o nível de informação mostrado" +
        " em cada tela e possibilitar o retorno do usuário a uma etapa anterior, o nível de dificuldade " +
        " ficou bem interessante;",

      " Fazer os componentes Form e Input flexíveis." +
        " Desde o formulário com campos de Input com texto normal," +
        " até um Form com type='radio', onde você escolhe o assessor," +
        " sendo cada opção, um Card do assessor renderizado;",
    ],
    fLearning: [
      "Distinção entre componentes renderizados no Servidor e no Cliente usando Next.js;",
      "Autenticação através de Cookies com o servidor do Next.js dentro do React.useEffect;",
      "No CSS, posicionamento da imagem principal da imagem inicial com 'width: 100svw' " +
        "na tela pequena e com 'max-width: 800px && position: absolute' na tela larga a fim de possibilitar " +
        "a posição desejada no Design;",
    ],
    fNextSteps: [
      "Adicionar funcionalidade de visualização de assessor através de filtro por experiência ou especialidade;",
      "Listagem de assessores com paginação;",
      "Melhorar a velocidade das mudanças de página;",
    ],
  },
];
