import { isIOS } from '@constants';
import { Dimensions } from 'react-native';

export const { width, height } = isIOS
  ? Dimensions.get('screen')
  : Dimensions.get('window');
