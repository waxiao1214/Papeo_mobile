import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: 10,
    flex: 1,
    borderColor: Colors.$partyDeactive,
    padding: 2,
  },
  bar: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 6,
    width: '9.090909090909092%',
  },

  title: {
    ...Fonts.regular,
    fontSize: 14,
    color: 'white',
    marginRight: 18,
  },

  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 7,
  },
});
