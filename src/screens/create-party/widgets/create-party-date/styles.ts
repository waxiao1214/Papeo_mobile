import { StyleSheet } from 'react-native';
import { Fonts } from '../../../../styles';

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
});
