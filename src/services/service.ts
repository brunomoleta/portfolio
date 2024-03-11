export const upper = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export const joinArray = (array: string[]) =>
  array.map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(", ");
