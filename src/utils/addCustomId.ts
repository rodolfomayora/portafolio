export function addCustomId<T>(item: any): T & { customId: string} {
  return ({
    ...item,
    customId: crypto.randomUUID(),
  });
}