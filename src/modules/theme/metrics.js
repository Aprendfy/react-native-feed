import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const screenRatio = width / height;
export const verticalModule = height / 80;
export const horizontalModule = Math.ceil(width / 45);
