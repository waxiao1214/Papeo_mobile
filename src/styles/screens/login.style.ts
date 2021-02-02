import { StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../colors/colors';

const LoginScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: "#25233DAF",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    marginTop: 80,
  },
  bold: {
    fontWeight: '700'
  },
  f20: {
    fontSize: 20
  },
  white: {
    color: 'white'
  },
  line: {
    height: 9,
    width: 60,
    borderStyle: 'solid',
    borderColor: '#FD2356',
    borderTopWidth: 1,
    marginTop: 25,
    alignSelf: 'center'
  },
  description: {
    marginTop: 25,
    lineHeight: 20
  },
  button: {
    backgroundColor: 'white'
  },
  terms: {
    position: 'absolute', 
    bottom: 30, 
    width: '100%', 
    alignItems: 'center'
  }
})

export default LoginScreenStyle