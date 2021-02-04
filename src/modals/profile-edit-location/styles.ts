import { StyleSheet } from 'react-native';

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
  mapview: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    height: 340,
    marginTop: 24
  },
  image: {
    width: 75,
    height: 63,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 13
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  white: {
    color: '#fff'
  },
  heaterTitle: {
    flex: 1,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600'
  },
  name: {
    fontSize: 20,
    marginTop: 8
  },
  nameTitle: {
    marginTop: 18,
  },
  gray: {
    color: '#585b64',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  cancelButton: {
    textAlign: 'center'
  }
})