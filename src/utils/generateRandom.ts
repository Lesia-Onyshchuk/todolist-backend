export const generateRandom = (): number => {
  const num = Math.floor(Math.random() * 900) + 100;
  return num;
};
