export const getImageUrl = (fileName: string) =>
  new URL(`../assets/images/${fileName}`, import.meta.url).href;
