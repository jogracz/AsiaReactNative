import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import { Camera } from 'expo-camera';
import CameraComponent from '../components/CameraComponent';
import MorseForm from '../components/MorseForm';
import { translateToMorse } from '../morseMessenger/morseFunctions';
import { DictOptions } from '../morseMessenger/morseDictionary';

const TORCH_ON = 'torch';
const TORCH_OFF = 'off';
const PAUSE = 1000;
const FLASH_PAUSE = 400;
const FLASH_SHORT = 100;
const FLASH_LONG = 700;

export default function NativeModule() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [flashMode, setFlashMode] = useState(TORCH_OFF);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const buttonCallback = useCallback(input => {
    asyncFlash(input);
  }, []);

  // Get the permision
  useEffect(() => {
    const effect = async () => {
      const {
        status
      }: { status: string } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    effect();
  }, []);

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

  async function asyncFlash(sentence: string): Promise<void> {
    setButtonDisabled(true);

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
    setButtonDisabled(false);
  }

  // render
  if (hasPermission === null) {
    return <ContainerFull bgColor={colors.second} />;
  } else if (hasPermission === false) {
    return (
      <ContainerFull bgColor={colors.second}>
        <Header>No Permission to use camera</Header>
      </ContainerFull>
    );
  } else {
    return (
      <ContainerFull bgColor={colors.second}>
        <Header>Native Module - Morse Messenger</Header>
        <CameraComponent flashMode={flashMode} />
        <MorseForm
          buttonCallback={buttonCallback}
          buttonDisabled={buttonDisabled}
        />
      </ContainerFull>
    );
  }
}
