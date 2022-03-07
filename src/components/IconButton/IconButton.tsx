import React from 'react';
import type { RectButtonProperties } from 'react-native-gesture-handler';
import {
  RectButton,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import type { Colors } from '@constants';
import { useDripsyTheme } from 'dripsy';

export interface IIconButtonProps {
  name: keyof typeof Icon.glyphMap;
  iconSize: number;
  onPress: () => void;
  color?: Colors;
  style?: RectButtonProperties['style'];
}

export const IconButton = ({
  name,
  iconSize,
  onPress,
  style,
  color,
}: IIconButtonProps) => {
  const { theme } = useDripsyTheme();
  return (
    <GestureHandlerRootView>
      <RectButton {...{ onPress, style }}>
        <Icon
          size={iconSize}
          name={name}
          color={color || theme.colors.$iconDefault}
        />
      </RectButton>
    </GestureHandlerRootView>
  );
};
