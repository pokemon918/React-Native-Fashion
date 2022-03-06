import type { screens } from '@constants';
import type { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  [screens.ONBOARDING]: undefined;
  [screens.WELCOME]: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;
