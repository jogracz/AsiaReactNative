import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NativeModule = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native Module</Text>
      {/* <Button
        title='Check out my Favourite Pokemon'
        onPress={() => navigation.navigate('FavPokemon')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D3771',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white'
  }
});

export default NativeModule;
