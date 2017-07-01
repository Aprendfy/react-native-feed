import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../theme';

export default StyleSheet.create({
  collapsedContainer: {
    flex: 1,
    height: 50 * metrics.horizontalModule,
    justifyContent: 'flex-start'
  },
  fullContainer: {
    flex: 1
  },
  footerContainer: {
    backgroundColor: colors.lightBackground
  }
});
