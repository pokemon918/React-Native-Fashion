import { useDripsyTheme } from 'dripsy';
import React from 'react';
import { Text } from 'react-native';
import type { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonContainer } from './Button.styles';

export interface IButtonProps {
  label: string;
  variant: 'primary' | 'default';
  onPress: () => void;
  style?: RectButtonProperties['style'];
}

export const Button = ({
  label,
  variant = 'default',
  onPress,
}: IButtonProps) => {
  const { theme } = useDripsyTheme();
  const { backgroundColor, color } = theme.button[variant];

  return (
    <ButtonContainer onPress={onPress} style={{ backgroundColor }}>
      <Text style={{ color }}>{label}</Text>
    </ButtonContainer>
  );
};
