import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors/colors';

const ButtonStyle = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    height: 46,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  icon: {
    marginRight: 12
  }
});

export default ButtonStyle;
