import { Container } from '@components';
import { Colors } from '@constants';
import { useDripsyTheme } from 'dripsy';
import React from 'react';

import {
  BackgroundContainer,
  TOP_LEFT_RADIUS,
  BOTTOM_RIGHT_RADIUS,
  ImagePattern,
} from './Background.styles';

export const Background = () => {
  const { theme } = useDripsyTheme();
  return (
    <BackgroundContainer>
      <Container flex={1 / 3} bg={Colors.OrangeDeep}>
        <Container
          bg={theme.colors.$bg}
          style={BOTTOM_RIGHT_RADIUS}
        />
      </Container>

      <Container
        flex={1 / 3}
        bg={Colors.Midnight}
        style={TOP_LEFT_RADIUS}
      >
        <ImagePattern
          source={require('../../../../../assets/images/patterns/1.png')}
        />
      </Container>

      <Container flex={1 / 3} bg={Colors.OrangeDeep}>
        <Container bg={Colors.Midnight} style={TOP_LEFT_RADIUS} />
      </Container>
    </BackgroundContainer>
  );
};
