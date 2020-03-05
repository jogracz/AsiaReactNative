import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';

export default function NativeModule() {
  return (
    <ContainerFull bgColor={colors.second}>
      <Text style={styles.header}>Native Module</Text>
    </ContainerFull>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.light
  }
});
