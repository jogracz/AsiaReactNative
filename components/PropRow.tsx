import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  left: string;
  right: string | Array<string>;
}

export default function PropRow({ left, right }: Props) {
  return (
    <View style={styles.propRow}>
      <Text style={styles.properties}>{left}</Text>
      <Text style={styles.properties}>{right}</Text>
    </View>
  );
}
