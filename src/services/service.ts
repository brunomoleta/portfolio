export const upper = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export const joinArray = (array: string[]) =>
  array.map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(", ");

export const altTemplateMulti = (
  content: string,
) => `Desktop exibindo ${content} da aplicação e um celular
ao lado dele, visto de frente exibindo o mesmo conteúdo.`;

export const twoMobiles = (firstScreen: string, secondScreen: string) =>
  `Dois dispositivos móveis. O primeiro mostra a tela de ${firstScreen}, o segundo de ${secondScreen}.`;
export const threeMobiles = (
  firstScreen: string,
  secondScreen: string,
  thirdScreen: string,
) =>
  `Três dispositivos móveis. O primeiro mostra a tela de ${firstScreen}, o segundo de ${secondScreen} e o terceiro ${thirdScreen}.`;
