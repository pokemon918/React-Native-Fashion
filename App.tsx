import React from 'react';
import { LoadAssets, ThemeManager } from '@components';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens';
import { fonts } from '@styles';
import { screens } from '@constants';

type AuthStackParamList = {
  [screens.ONBOARDING]: undefined;
  [screens.WELCOME]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();
function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={screens.ONBOARDING}
        component={Onboarding}
      />
    </AuthStack.Navigator>
  );
}

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <ThemeManager>
        <AuthNavigator />
      </ThemeManager>
    </LoadAssets>
  );
}
