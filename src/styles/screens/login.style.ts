import { StyleSheet } from 'react-native';
import Color from '../colors/colors';

const LoginScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: "#151521DD",
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
  f16: {
    fontSize: 16
  },
  white: {
    color: 'white'
  },
  gray: {
    color: '#585b64',
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
    width: '100%',
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  editIcon: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 4
  },
  codeFieldRoot: {
    marginTop: 30,
  },
  cell: {
    width: 46,
    height: 46,
    lineHeight: 38,
    fontSize: 30,
    color: 'white',
    borderWidth: 2,
    borderColor: '#7f8187',
    textAlign: 'center',
    backgroundColor: '#25233D',
    opacity:0.8,
    borderRadius: 8
  },
  focusCell: {
    borderColor: '#7f8187'
  }
})

export default LoginScreenStyle