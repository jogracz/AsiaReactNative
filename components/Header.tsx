import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../style/styleVariables';

export default function Header({ children }: { children: any }) {
  return <Text style={styles.header}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: '700',
    color: colors.light
  }
});
