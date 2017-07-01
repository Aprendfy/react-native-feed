import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imageCover: {
    flex: 1,
    height: 25 * metrics.horizontalModule
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
