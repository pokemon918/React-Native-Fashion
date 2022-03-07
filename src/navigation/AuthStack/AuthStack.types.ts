import type { screens } from '@constants';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParams = {
  [screens.ONBOARDING]: undefined;
  [screens.WELCOME]: undefined;
};

export type AuthStackNavigationProps =
  NativeStackNavigationProp<AuthStackParams>;
