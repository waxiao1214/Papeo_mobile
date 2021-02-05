import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  autoWrapper: {
    padding: 24,
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.$partyBackground,
  },
  title: {
    ...Fonts.regular,
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 40,
  },
  input: {
    ...Fonts.regular,
    fontSize: 14,
    color: 'white',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.$partyDeactive,
  },
  mapView: {
    backgroundColor: 'green',
    flex: 1,
    marginTop: -20,
    zIndex: -1,
  },
  location: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.$partyBackground,
    right: 24,
    bottom: 130,
  },
});
