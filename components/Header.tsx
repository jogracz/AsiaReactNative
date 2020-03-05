import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../style/styleVariables';

const Header: FunctionComponent = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: '700',
    color: colors.light
  }
});

export default Header;
