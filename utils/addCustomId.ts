const addCustomId = (item: any, index: number) => ({
  ...item,
  customId: (index + 1).toString()
});

export default addCustomId;