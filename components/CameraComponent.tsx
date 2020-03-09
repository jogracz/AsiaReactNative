import React from 'react';
import { Camera } from 'expo-camera';

export default function CameraComponent({ flashMode }: { flashMode: string }) {
  if (flashMode) {
    return <Camera type={Camera.Constants.Type.back} flashMode={flashMode} />;
  } else return <Camera type={Camera.Constants.Type.back} />;
}
