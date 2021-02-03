import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    minHeight: 100 - getStatusBarHeight(),
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: getStatusBarHeight(),
    // alignItems: 'center',
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 24,
    color: 'white',
    marginTop: -8,
    marginLeft: 16,
  },
  close: {
    marginLeft: 'auto',
  },
  date: {
    color: '#585b64',
    marginLeft: 56
  }
});
