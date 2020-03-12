import React, { useState, useEffect, useCallback } from 'react';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import { Camera } from 'expo-camera';
import CameraComponent from '../components/CameraComponent';
import MorseForm from '../components/MorseForm';
import useFlash from '../morseMessenger/flashHook';

export default function NativeModule() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [flashMode, startMorseForInputCallback] = useFlash();

  const buttonCallback = startMorseForInputCallback;

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
      </ContainerFull>
    );
  }
}
