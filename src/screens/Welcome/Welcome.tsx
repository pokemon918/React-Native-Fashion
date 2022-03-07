import { Button, Text } from '@components';
import { screens } from '@constants';
import type { RootNavigationProps } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { PICTURE } from './Welcome.constants';
import {
  BodyBox,
  BodyContent,
  Picture,
  ScreenContainer,
  TopBox,
} from './Welcome.styles';

export const Welcome = () => {
  const nav = useNavigation<RootNavigationProps>();

  const onPress = useCallback(() => {
    nav.navigate(screens.HOME, { screen: screens.OUTFIT_IDEAS });
  }, [nav]);

  return (
    <ScreenContainer>
      <TopBox>
        <Picture source={PICTURE.src} />
      </TopBox>
      <BodyBox>
        <BodyContent>
          <Text variant="heading" center>
            Let's get started
          </Text>
          <Text variant="body" center>
            Login to your account below or signup for an amazing
            experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => true}
          />
          <Button label="Join us, it's free" onPress={onPress} />
          <Button
            label="Forgot password?"
            variant="transparent"
            onPress={() => true}
          />
        </BodyContent>
      </BodyBox>
    </ScreenContainer>
  );
};
