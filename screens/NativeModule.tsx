import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';

function Inner() {
  return <Text style={styles.header}>Native Module</Text>;
}

export default function NativeModule() {
  return <ContainerFull internalComponent={<Inner />} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.light
  }
});
