import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../style/styleVariables';

const styles = StyleSheet.create({
  properties: {
    color: colors.light,
    fontSize: 16
  },
  propRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: colors.first,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default styles;
