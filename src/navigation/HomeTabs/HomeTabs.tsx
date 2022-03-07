import React from 'react';
import { screens } from '@constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OutfitIdeas } from '@screens';

import type { HomeTabsParams } from './HomeTabs.types';

const HomeTabs = createBottomTabNavigator<HomeTabsParams>();
export function HomeTabsNavigator() {
  return (
    <HomeTabs.Navigator
      initialRouteName={screens.OUTFIT_IDEAS}
      screenOptions={{ headerShown: false }}
    >
      <HomeTabs.Screen
        name={screens.OUTFIT_IDEAS}
        component={OutfitIdeas}
      />
    </HomeTabs.Navigator>
  );
}
