import capitalizeWord from './capitalizeWord';

const capitelizeAllWords = (str: string): string => {
  return str.trim()
  .split(' ')
  .filter((word: string) => word !== '')
  .map((word: string) => capitalizeWord(word))
  .join(' ');
}

export default capitelizeAllWords;