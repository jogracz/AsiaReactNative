import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function LoadingFull({ styleProp }: { styleProp: object }) {
  return (
    <View style={styleProp}>
      <Text>Loading...</Text>
    </View>
  );
}
