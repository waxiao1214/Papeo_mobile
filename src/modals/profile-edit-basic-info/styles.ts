import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  animate:{
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
    marginTop: 20,
    marginBottom: 45,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 24,
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
  title: {
    marginTop: 50
  },
  subText: {
    fontStyle: 'italic',
    marginLeft: 12
  },
  subTitle: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 8,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 125
  },
  white: {
    color: 'white',
  },
  gray: {
    color: '#585b64',
  },
  genderTitle: {
    marginTop: 47
  },
  genderView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 13
  },
  warning: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  }
})