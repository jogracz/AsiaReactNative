import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { colors } from '../style/styleVariables';
import ButtonComponent from './ButtonComponent';

interface Props {
  buttonCallback: (input: string) => void;
  buttonDisabled: boolean;
}

export default function MorseForm({ buttonCallback, buttonDisabled }: Props) {
  const [input, setInput] = useState('');

  return (
    <View style={styles.viewMain}>
      <View style={styles.textInputView}>
        <TextInput style={styles.textInput} onChangeText={e => setInput(e)} />
      </View>
      <ButtonComponent
        bgColor={colors.extra}
        title='Send with Morse Code'
        buttonCallback={() => buttonCallback(input)}
        buttonDisabled={buttonDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewMain: {
    alignItems: 'center',
    width: '80%'
  },
  textInputView: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    padding: 5
  },
  textInput: {
    backgroundColor: 'white',
    width: '100%',
    fontSize: 18
  }
});
