import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    ...Fonts.regular,
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  item: {
    width: '48%',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.$partyDeactive,
    borderRadius: 8,
  },
  itemDetail: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    ...Fonts.regular,
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  },
  medias: {
    flex: 1,
  },
  mediaText: {
    ...Fonts.regular,
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
  preview: {
    height: 46,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.$partyActive,
    marginBottom: 20,
  },
  previewText: {
    ...Fonts.regular,
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
});
