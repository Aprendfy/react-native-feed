import { StyleSheet } from 'react-native';
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

export const feedCardStyle = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 2
  },
  bodyContainer: {
    flex: 3
  },
  footerContainer: {
    flex: 1,
    backgroundColor: colors.lightBackground,
    justifyContent: 'flex-end'
  }
});

export const cardBodyStyle = StyleSheet.create({
  text: {
    color: colors.blackPrimary,
    fontSize: 14,
  },
  textWrapper: {
    padding: 10,
    backgroundColor: colors.lightBackground
  }
});
