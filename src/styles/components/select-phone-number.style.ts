import { StyleSheet } from 'react-native';
import Colors from '../colors/colors';

const ButtonStyle = StyleSheet.create({
  container: {
    position: 'relative',
  },
  country: {
    width: 67,
    height: 40,
    position: 'absolute',
    top: 3,
    marginLeft: 3,
    borderRightWidth: 1,
    borderColor: '#666577',
    borderTopLeftRadius: 5,
    alignItems: 'center',
    paddingTop: 8,
    borderBottomLeftRadius: 5
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 46,
    fontSize: 16,
    paddingLeft: 75,
    color: 'white',
    backgroundColor: '#25233D',
    opacity: 0.8,
  }
})

export default ButtonStyle