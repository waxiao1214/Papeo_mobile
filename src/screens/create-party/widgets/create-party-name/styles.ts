import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../styles';

export default StyleSheet.create({
  container: {
    padding: 24,
  },
  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: 'white',
    fontSize: 14,
  },
  deactive: {
    ...Fonts.regular,
    color: Colors.$partyDeactive,
  },
  tagContainer: {
    // backgroundColor: 'transparent',
  },
  tagInput: {
    ...Fonts.regular,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});
