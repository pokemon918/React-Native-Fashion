import type { screens } from '@constants';
import type { HomeTabsParams } from '@navigation';
import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParams = {
  [screens.AUTH]: undefined;
  [screens.HOME]: NavigatorScreenParams<HomeTabsParams>;
};

export type RootNavigationProps =
  NativeStackNavigationProp<RootStackParams>;
