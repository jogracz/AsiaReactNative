import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import { Camera } from 'expo-camera';
import CameraComponent from '../components/CameraComponent';
import MorseForm from '../components/MorseForm';
import { translateToMorse } from '../morseMessenger/morseFunctions';

const TORCH_ON = 'torch';
const TORCH_OFF = '';

export default function NativeModule() {
  const [hasPermission, setHasPermission] = useState(null);
  const [flashMode, setFlashMode] = useState('');

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

  function torchOffAfter(time: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setFlashMode(TORCH_OFF);
        resolve();
      }, time);
    });
  }
  function torchOnAfter(time: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setFlashMode(TORCH_ON);
        resolve();
      }, time);
    });
  }
  function short(): Promise<any> {
    return new Promise((resolve, reject) => {
      torchOnAfter(400)
        .then(() => torchOffAfter(100))
        .then(resolve);
    });
  }

  function long(): Promise<any> {
    return new Promise((resolve, reject) => {
      torchOnAfter(400)
        .then(() => torchOffAfter(700))
        .then(resolve);
    });
  }

  function pause(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  // function letterPause(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 1000);
  //   });
  // }

  // function wordPause(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 2000);
  //   });
  // }

  // const longOrShort = {
  //   pause: pause,
  //   s: short,
  //   l: long
  // };

  const asyncFlash = async (sentence: string): Promise<void> => {
    const morseCode = translateToMorse(sentence);
    for (let i = 0; i < morseCode.length; i++) {
      if (morseCode[i] === 's') {
        await short();
      } else if (morseCode[i] === 'l') {
        await long();
      } else if (morseCode[i] === 'pause') {
        await pause();
      }

      //await longOrShort[morseCode[i]]();
    }
  };

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
        <MorseForm buttonCallback={buttonCallback} />
        <Text onPress={() => asyncFlash('a cab caca ba')}>ToggleFlashMode</Text>
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({});
