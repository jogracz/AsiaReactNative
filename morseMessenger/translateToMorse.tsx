import { morseDictionary, DictOptions } from './morseDictionary';

export default function translateToMorse(sentence: string) {
  if (!sentence) return [];
  const letters = sentence.toLowerCase().split('');
  const morseCode: Array<string> = [];
  letters.forEach((letter: string) => {
    if (morseDictionary[letter]) {
      morseCode.push(...morseDictionary[letter], DictOptions.pause);
    }
  });
  return morseCode;
}
