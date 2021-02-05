import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  consentModal: {
    position: 'absolute',
    backgroundColor: 'rgba(15, 15, 15, 0.75)',
    width: '100%',
    height: '100%',
  },

  modalBGView: {
    position: 'absolute',
    backgroundColor: 'rgba(15, 15, 15, 0.75)',
    height: '100%',
    width: '100%',
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
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

  title: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
  },

  subtitle: {
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 30,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    color: '#4E4640',
    marginBottom: 40,
  },

  buttonsWrap: {
    width: 280,
    marginTop: 10,
  },

  textTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: '#4E4640',
  },

  subText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },

  moreLessButton: {
    textDecorationLine: 'underline',
    color: '#4E4640',
  },
});
