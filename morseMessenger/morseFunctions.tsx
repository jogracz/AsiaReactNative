import { morseDictionary } from './morseDictionary';

export function translateToMorse(sentence: string): Array<string> {
  const letters = sentence.toLowerCase().split('');
  const morseCode: Array<string> = [];
  letters.forEach((letter: string) =>
    morseCode.push(...morseDictionary[letter])
  );
  return morseCode;
}
