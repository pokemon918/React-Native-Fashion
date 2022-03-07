import type { screens } from '@constants';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeTabsParams = {
  [screens.OUTFIT_IDEAS]: undefined;
};

export type HomeTabsNavigationProps =
  NativeStackNavigationProp<HomeTabsParams>;
