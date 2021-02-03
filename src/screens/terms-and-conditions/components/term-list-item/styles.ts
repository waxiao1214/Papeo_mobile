import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#25233D',
    flex: 1,
  },
  item: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  f24: {
    fontSize: 24,
  },
  bold: {
    fontWeight: '700',
  },
  header: {
    height: 130,
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#25233D',
    width: '100%',
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  gray: {
    color: '#585b64',
  },
  body: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  white: {
    color: 'white',
  },
  mt4: {
    marginTop: 2,
  },
  mt8: {
    marginTop: 14,
  },
});
