import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

interface Props {
  bgColor: string;
  title: string;
  buttonCallback: () => void;
  disableOnPress?: boolean;
}

export default function ButtonComponent({
  bgColor,
  title,
  buttonCallback,
  disableOnPress
}: Props) {
  const [disabled, setDisabled] = useState(false);

  const onPress = useCallback(async () => {
    disableOnPress && setDisabled(true);
    try {
      await buttonCallback();
    } finally {
    }
    disableOnPress && setDisabled(false);
  }, [disabled, disableOnPress, setDisabled]);

  return (
    <View style={styles.buttonView}>
      <Button
        color={bgColor}
        title={title}
        onPress={onPress}
        disabled={disabled}
      />
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
