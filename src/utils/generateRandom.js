export const generateRandom = () => {
  const num = Math.floor(Math.random() * 999) + 1;
  return String(num).padStart(3, '0');
};
