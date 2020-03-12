import React, { useState, useCallback } from 'react';
import { morseDictionary, DictOptions } from './morseDictionary';

const TORCH_ON = 'torch';
const TORCH_OFF = 'off';
const PAUSE = 1000;
const FLASH_PAUSE = 400;
const FLASH_SHORT = 100;
const FLASH_LONG = 700;

export default function useFlash() {
  const [flashMode, setFlashMode] = useState(TORCH_OFF);

  function torchOffAfter(timeInMs: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setFlashMode(TORCH_OFF);
        resolve();
      }, timeInMs);
    });
  }
  function torchOnAfter(timeInMs: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setFlashMode(TORCH_ON);
        resolve();
      }, timeInMs);
    });
  }

  function short(): Promise<any> {
    return new Promise((resolve, reject) => {
      torchOnAfter(FLASH_PAUSE)
        .then(() => torchOffAfter(FLASH_SHORT))
        .then(resolve);
    });
  }
  function long() {
    return new Promise((resolve, reject) => {
      torchOnAfter(FLASH_PAUSE)
        .then(() => torchOffAfter(FLASH_LONG))
        .then(resolve);
    });
  }
  function pause() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, PAUSE);
    });
  }

  function translateToMorse(sentence: string) {
    const letters = sentence.toLowerCase().split('');
    const morseCode: Array<string> = [];
    letters.forEach((letter: string) =>
      morseCode.push(...morseDictionary[letter], DictOptions.pause)
    );
    return morseCode;
  }

  const startMorseForInputCallback = useCallback(
    async (sentence: string): Promise<void> => {
      const morseCode = translateToMorse(sentence);
      for (let i = 0; i < morseCode.length; i++) {
        if (morseCode[i] === DictOptions.s) {
          await short();
        } else if (morseCode[i] === DictOptions.l) {
          await long();
        } else if (morseCode[i] === DictOptions.pause) {
          await pause();
        }
      }
    },
    [translateToMorse]
  );

  return [flashMode, startMorseForInputCallback];
}
