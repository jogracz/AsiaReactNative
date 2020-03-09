import React, { useCallback } from 'react';
import { StyleSheet, View, Button } from 'react-native';

interface Props {
  bgColor: string;
  buttonCallback: () => void;
}

export default function MoreInfoButton({ bgColor, buttonCallback }: Props) {
  return (
    <View style={styles.buttonView}>
      <Button color={bgColor} title='More Info' onPress={buttonCallback} />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonView: {
    marginBottom: 50,
    marginTop: 20
  }
});
