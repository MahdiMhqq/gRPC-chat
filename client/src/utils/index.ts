export const findAllIndexes = (text: string, char: string) => {
  const indexes = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) indexes.push(i);
  }
  return indexes;
};
