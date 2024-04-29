import { capitalizeWord } from '#utils/capitalizeWord';

export function capitelizeAllWords (str: string): string {
  return str.trim()
  .split(' ')
  .filter((word: string) => word !== '')
  .map((word: string) => capitalizeWord(word))
  .join(' ');
}