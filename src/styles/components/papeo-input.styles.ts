import { StyleSheet } from 'react-native'

const PapeoInputStyle = StyleSheet.create({
  container: {
    display: 'flex'
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 46,
    fontSize: 16,
    paddingLeft: 46,
    color: 'white',
    backgroundColor: '#25233D',
    opacity: 0.8,
  },
  icon: {
    position: 'absolute',
    top: 12,
    marginLeft: 12
  }
})

export default PapeoInputStyle;