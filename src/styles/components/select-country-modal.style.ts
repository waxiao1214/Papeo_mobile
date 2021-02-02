import { StyleSheet } from 'react-native';
import Colors from '../colors/colors';

const SelectCountryModalStyle = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#201f34cc',
  },
  body: {
    marginTop: 25,
    marginLeft: 14,
    marginRight: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 25,
    borderRadius: 10,
    height: 500,
    backgroundColor: '#201f34',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: 'white',
    flex: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  searchInput: {
    height: 36,
    paddingLeft: 12,
    borderRadius: 8,
    fontSize: 14,
    color: 'white',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray'
  },
  countryList: {
    height: 54,
    paddingTop: 13,
    display: 'flex',
    flexDirection: 'row'
  },
  phoneCode:{
    paddingRight: 24
  },
  left: {
    paddingLeft: 12,
    flex: 1,
  }
})

export default SelectCountryModalStyle