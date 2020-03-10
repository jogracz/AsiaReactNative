import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { colors } from '../style/styleVariables';
import ButtonComponent from './ButtonComponent';

export default function MorseForm({ buttonCallback }) {
  const [input, setInput] = useState('');

  return (
    <View style={{ alignItems: 'center', width: '80%' }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          height: 40,
          justifyContent: 'center',
          padding: 5
        }}
      >
        <TextInput style={styles.textInput} onChangeText={e => setInput(e)} />
      </View>
      <ButtonComponent
        bgColor={colors.extra}
        title='Send with Morse Code'
        buttonCallback={() => buttonCallback(input)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    width: '100%',
    fontSize: 18
  }
});
