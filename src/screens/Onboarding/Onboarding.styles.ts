import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

import { SLIDER_HEIGHT, BORDER_RADIUS } from './Onboarding.constants';

export const Container = styled.View({
  flex: 1,
  backgroundColor: 'white',
});

export const Slider = styled(Animated.View)({
  height: SLIDER_HEIGHT,
  borderBottomRightRadius: BORDER_RADIUS,
});

export const Footer = styled(Animated.View)({
  flex: 1,
});

export const FooterInner = styled(Animated.View)(
  ({ width }: { width: number }) => ({
    width,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  }),
);
