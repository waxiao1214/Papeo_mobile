import { StyleSheet } from 'react-native';
import { Colors } from '../../../../styles';

export default StyleSheet.create({
  container: {
    padding: 24,
  },
  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'SFProDisplay-Regular',
    color: 'white',
    fontSize: 14,
  },
  deactive: {
    fontFamily: 'SFProDisplay-Regular',
    color: Colors.$partyDeactive,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: '#120825',
    marginBottom: 10,
  },
  tagInput: {
    fontFamily: 'SFProDisplay-Regular',
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
});
