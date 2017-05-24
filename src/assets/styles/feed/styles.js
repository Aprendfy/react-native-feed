import { StyleSheet, Platform } from 'react-native';
import { colors, hm } from '../styles';

export const cardHeaderStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imageCover: {
    flex: 1,
    height: 25 * hm
  },
  firstContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    color: colors.whitePrimary,
    fontSize: 27,
    fontWeight: '500'
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  itemDetailWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  detailText: {
    marginHorizontal: 5,
    color: colors.whitePrimary,
    fontSize: 12
  }
});
