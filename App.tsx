import { LoadAssets, ThemeManager } from '@components';
import { AuthNavigator } from '@navigation';
import { assets } from '@screens';
import { fonts } from '@styles';
import React from 'react';

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <ThemeManager>
        <AuthNavigator />
      </ThemeManager>
    </LoadAssets>
  );
}
