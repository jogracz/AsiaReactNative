import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/base';

export default function PropRow({ left, right }) {
  return (
    <View style={styles.propRow}>
      <Text style={styles.properties}>{left}</Text>
      <Text style={styles.properties}>{right}</Text>
    </View>
  );
}
