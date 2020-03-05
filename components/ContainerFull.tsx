import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

type ContainerProps = {
  bgColor: string;
};

const ContainerFull: FunctionComponent<ContainerProps> = ({
  bgColor,
  children
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default ContainerFull;
