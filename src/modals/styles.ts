import { StyleSheet } from 'react-native'
import { floor } from 'react-native-reanimated'

export default StyleSheet.create({
  animate: {
    position: 'absolute',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(32, 31, 52, 0.8)'
  },

  modalView: {
    margin: 20,
    marginTop: 15,
    marginBottom: 45,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#25233D',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row'
  },
})