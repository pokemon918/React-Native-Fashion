import React from 'react';
import { LoadAssets, ThemeManager } from '@components';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens';
import { fonts } from '@styles';

const AuthStack = createStackNavigator();
function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
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
