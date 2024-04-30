export function addCustomId (item: any, index: number) {
  return ({
    ...item,
    customId: (index + 1).toString()
  });
}