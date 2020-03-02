import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59B6AE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    // backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white'
  },
  propCard: {
    width: 160
  },
  properties: {
    color: 'white',
    fontSize: 16
  },
  propRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default styles;
