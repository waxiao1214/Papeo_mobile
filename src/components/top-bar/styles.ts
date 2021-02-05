import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Colors, Fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    minHeight: 100 - getStatusBarHeight(),
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
  },
  title: {
    ...Fonts.bold,
    fontSize: 24,
    color: 'white',
    // marginTop: -8,
    marginLeft: 16,
  },
  close: {
    marginLeft: 'auto',
  },
  badge: {
    position: 'absolute',
    backgroundColor: Colors.$partyActive,
    borderRadius: 8,
    height: 16,
    width: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 6.5,
    paddingRight: 6.5,
    left: 16,
    bottom: -16,
  },
  date: {
    color: '#585b64',
    marginLeft: 56,
  },
});
