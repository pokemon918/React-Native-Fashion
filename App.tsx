import { LoadAssets, ThemeManager } from '@components';
import { RootNavigator } from '@navigation';
import { assets } from '@screens';
import { fonts } from '@styles';
import React from 'react';

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <ThemeManager>
        <RootNavigator />
      </ThemeManager>
    </LoadAssets>
  );
}
