import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../styles';

export default StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    ...Fonts.regular,
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    ...Fonts.regular,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
  },
  thumb: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.$partyActive,
    backgroundColor: Colors.$partyBackground,
  },
  track: {
    height: 2,
  },
  guests: {
    flexDirection: 'row',
    height: 350,
    marginTop: 20,
    flexWrap: 'wrap',
  },
  item: {
    width: 25,
    alignItems: 'center',
    marginTop: 5,
  },
});
