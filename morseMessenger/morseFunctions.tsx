import { morseDictionary, DictOptions } from './morseDictionary';

export function translateToMorse(sentence: string) {
  const letters = sentence.toLowerCase().split('');
  const morseCode: Array<string> = [];
  letters.forEach((letter: string) =>
    morseCode.push(...morseDictionary[letter], DictOptions.pause)
  );
  return morseCode;
}
