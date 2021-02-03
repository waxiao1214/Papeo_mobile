export const convertEmail = (email:string) => {
  let first = email.slice(0, 1)
  let last = email.split('.com')[0].slice(-1)
  
  return `${first}***@***${last}.com`
}