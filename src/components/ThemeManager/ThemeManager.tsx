import React from 'react';
import type { ReactChild } from 'react';
import { useColorScheme } from 'react-native';
import { DripsyProvider } from 'dripsy';
import { theme, themeDark } from '@styles';

interface IThemeManagerProps {
  children: ReactChild;
}

export function ThemeManager({ children }: IThemeManagerProps) {
  const colorMode = useColorScheme();
  return (
    <DripsyProvider theme={colorMode === 'dark' ? themeDark : theme}>
      {children}
    </DripsyProvider>
  );
}
