import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PokemonList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokemon List</Text>
      {/* <Button
        title='Go to Native Module'
        onPress={() => navigation.navigate('NativeModule')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC6364',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white'
  }
});
