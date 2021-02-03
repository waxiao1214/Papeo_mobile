import { StyleSheet } from 'react-native';
import Colors from '../colors/colors';

const ButtonStyle = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    height: 46,
    borderWidth: 1,
    borderColor: Colors.$primary,
  },
});

export default ButtonStyle;
