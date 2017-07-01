import { StyleSheet, Platform } from 'react-native';
import { colors, hm } from '../styles';

export const itemListStyles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 11 * hm
  },
  textStyle: {
    fontSize: 25,
    color: colors.whitePrimary
  }
});

export const categoriesScreenStyles = StyleSheet.create({
  navButtonsContainer: {
    width: (Platform.OS === 'ios') ? 114 : 122,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: hm,
    paddingVertical: (Platform.OS === 'ios') ? 0 : hm / 2
  },
  navButton: {
    width: (Platform.OS === 'ios') ? 44 : 48,
    height: (Platform.OS === 'ios') ? 44 : 48,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

