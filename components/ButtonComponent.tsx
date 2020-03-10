import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

interface Props {
  bgColor: string;
  title: string;
  buttonCallback: () => void;
}

export default function ButtonComponent({
  bgColor,
  title,
  buttonCallback
}: Props) {
  return (
    <View style={styles.buttonView}>
      <Button color={bgColor} title={title} onPress={buttonCallback} />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonView: {
    marginBottom: 50,
    marginTop: 20,
    width: '70%'
  }
});
