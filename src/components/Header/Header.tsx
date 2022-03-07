import { Colors } from '@constants';
import type { Feather as Icon } from '@expo/vector-icons';
import { Text, View } from 'dripsy';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderButton, RowContainer } from './Header.styles';

export interface IHeaderProps {
  left: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: keyof typeof Icon.glyphMap;
    onPress: () => void;
  };
}

export const Header = ({ left, title, right }: IHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <RowContainer mt={insets.top}>
      <HeaderButton
        name={left.icon}
        onPress={left.onPress}
        size={44}
        iconSize={20}
        color={Colors.Midnight}
      />
      <Text variant="header">{title.toUpperCase()}</Text>
      {right ? (
        <HeaderButton
          name={right.icon}
          onPress={right.onPress}
          size={44}
          iconSize={20}
          color={Colors.Midnight}
        />
      ) : (
        <View style={{ width: 44 }} />
      )}
    </RowContainer>
  );
};
