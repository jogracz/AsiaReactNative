import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  internalComponent: any;
}

export default function ContainerFull({ internalComponent }: Props) {
  return <View style={styles.container}>{internalComponent}</View>;
}
