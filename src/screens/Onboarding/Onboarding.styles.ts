import { styled, View } from 'dripsy';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

import { SLIDER_HEIGHT, BORDER_RADIUS } from './Onboarding.constants';

export const Container = styled(View)({
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

export const Pagination = styled(Animated.View)({
  ...StyleSheet.absoluteFillObject,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  zIndex: 1,
  elevation: 1,
});
export const SubslideContainer = styled(Animated.View)(
  ({ width }: { width: number }) => ({
    width,
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: BORDER_RADIUS,
    backgroundColor: '$bg',
  }),
);
