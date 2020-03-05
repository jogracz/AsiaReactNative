import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface Props {
  bgColor: string;
  children: any;
}

export default function ContainerFull({ bgColor, children }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
