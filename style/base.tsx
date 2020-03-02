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
    width: 180,
    marginBottom: 20
  },
  regularButton: {
    width: 160,
    backgroundColor: 'lightgrey'
  }
});

export default styles;
