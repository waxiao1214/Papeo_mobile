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
    width: 340,
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    marginTop: 20,
    marginBottom: 45,
    backgroundColor: '#F7F7FF',
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
    fontFamily: 'BalooDa2-SemiBold',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 30,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    color: '#4E4640',
  },

  subtitle: {
    fontFamily: 'BalooDa2-SemiBold',
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
    fontFamily: 'BalooDa2-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: '#4E4640',
  },

  subText: {
    fontFamily: 'BalooDa2-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#747474',
    marginRight: 25,
  },

  moreLessButton: {
    textDecorationLine: 'underline',
    color: '#4E4640',
  },
});
