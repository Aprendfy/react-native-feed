import { StyleSheet, Dimensions, Platform } from 'react-native';

export const colors = {
  primaryColor: '#DD3142',
  blackPrimary: '#212121',
  blackPrimaryAlt: '#000000DD',
  blackSecondary: '#757575',
  blackDisabled: '#E0E0E0',
  whitePrimary: '#ffffff',
  whiteSecondary: '#ffffffB2',

  lightBackground: '#f5f5f5',
  blackLight: '#f7f7f7',

  // alerts
  alertPrimary: '#EF5350',
  alertLight: '#ffebee',
  info: '#323232',
  warning: '#FFC107',
};

export const stdStyle = StyleSheet.create({
  navBar: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    height: (Platform.OS === 'ios') ? 64 : 56,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingHorizontal: (Platform.OS === 'ios') ? 0 : 4,
  },
  containerNavRightIcons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  navIconTouch: {
    height: (Platform.OS === 'ios') ? 44 : 48,
    width: (Platform.OS === 'ios') ? 44 : 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTextButtonTouch: {
    height: (Platform.OS === 'ios') ? 44 : 48,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  navTextButton: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.whitePrimary,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
});

export const { height, width } = Dimensions.get('window');
export const screenRatio = width / height;
export const vm = height / 80; // Vertical Module = 8px on a 640px height screen
export const hm = Math.ceil(width / 45); // Horizontal Module = 8px on a 360px width screen
