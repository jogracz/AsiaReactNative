import React from 'react';
import { Text } from 'react-native';
import ContainerFull from '../components/ContainerFull';

export default function LoadingFull({ bgColor }: { bgColor: string }) {
  return (
    <ContainerFull bgColor={bgColor}>
      <Text>Loading...</Text>
    </ContainerFull>
  );
}
