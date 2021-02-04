import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(32, 31, 52, 0.8)'
  },

  modalView: {
    margin: 20,
    marginTop: 20,
    marginBottom: 45,
    paddingLeft: 30,
    paddingRight: 30,
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
  image: {
    width: 75,
    height: 63,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 13
  },
  white: {
    color: '#fff'
  },
  title: {
    marginTop: 45,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 13
  },
  subText: {
    textAlign: 'center',
    marginTop: 13,
    marginBottom: 22
  }
})