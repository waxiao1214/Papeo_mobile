export const convertEmail = (email: string) => {
  const first = email.slice(0, 1);
  const last = email.split('.com')[0].slice(-1);

  return `${first}***@***${last}.com`;
};
