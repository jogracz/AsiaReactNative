import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../style/styleVariables';

interface Props {
  left: string;
  right: string;
}

export default function PropRow({ left, right }: Props) {
  return (
    <View style={styles.propRow}>
      <Text style={styles.properties}>{left}</Text>
      <Text style={styles.properties}>{right}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  properties: {
    color: colors.light,
    fontSize: 16
  },
  propRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
