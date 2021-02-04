import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  item: {
    borderWidth: 1,
    padding: 14,
    marginBottom: 20,
    borderRadius: 8,
  },
  itemTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
  },
  itemDescription: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 13,
  },
  input: {
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: 'white',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
});
