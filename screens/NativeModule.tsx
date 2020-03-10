import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import { Camera } from 'expo-camera';
import CameraComponent from '../components/CameraComponent';

export default function NativeModule() {
  const [hasPermission, setHasPermission] = useState(null);
  const [flashMode, setFlashMode] = useState('');
  const TORCH_ON = 'torch';
  const TORCH_OFF = '';

  // Get the permision
  useEffect(() => {
    const effect = async () => {
      const {
        status
      }: { status: string } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    effect();
    // flashLong();
  }, []);

  const ToggleFlashMode = useCallback(() => {
    if (flashMode === TORCH_ON) {
      setFlashMode(TORCH_OFF);
    } else {
      setFlashMode(TORCH_ON);
    }
  }, [flashMode]);

  // nowe
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
  function short() {
    return new Promise((resolve, reject) => {
      torchOnAfter(400)
        .then(() => torchOffAfter(100))
        .then(resolve);
    });
  }

  function long() {
    return new Promise((resolve, reject) => {
      torchOnAfter(400)
        .then(() => torchOffAfter(700))
        .then(resolve);
    });
  }

  // const newFlash = () => {
  //   long()
  //     .then(short)
  //     .then(short)
  //     .then(short)
  //     .then(long)
  //     .then(long)
  //     .then(long)
  //     .then(short);
  // };

  const morseDict = {
    a: ['s', 'l'],
    b: ['l', 's', 's', 's'],
    c: ['l', 's', 'l', 's'],
    d: ['l', 's', 's'],
    e: ['s']
  };

  const wordToMorse = word => {
    const letters = word.toList();
    const morseLetters = letters.map(letter > morseDict[letter]);
    console.log(morseLetters);
  };
  const slList = ['s', 's', 's', 'l', 'l', 's', 's', 's'];

  const longOrShort = {
    s: short,
    l: long
  };

  const asyncFlash = async letterList => {
    for (let i = 0; i < letterList.length; i++) {
      // if (letterList[i] == 's') {
      //   await short();
      // } else {
      //   await long();
      // }
      await longOrShort[letterList[i]]();
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
        <Text onPress={() => asyncFlash(slList)}>ToggleFlashMode</Text>
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({});
