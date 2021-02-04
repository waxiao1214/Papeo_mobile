import { StyleSheet } from 'react-native'
import { floor } from 'react-native-reanimated'

export default StyleSheet.create({
  modalView: {
    paddingLeft: 0,
    paddingRight: 0
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 95
  },
  description: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 140
  },
  headerImage: {
    position: 'absolute',
    width: '100%'
  },
  doYourBest: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center'
  }
})