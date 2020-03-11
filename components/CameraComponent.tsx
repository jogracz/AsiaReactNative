import React from 'react';
import { Camera } from 'expo-camera';

interface Props {
  flashMode: 'torch' | 'off';
}

export default function CameraComponent({ flashMode }: Props) {
  return <Camera type={Camera.Constants.Type.back} flashMode={flashMode} />;
}
