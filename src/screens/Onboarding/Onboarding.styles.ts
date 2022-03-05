import { styled } from 'dripsy';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Container } from '@components';
import { Radii } from '@constants';

import { SLIDER_HEIGHT } from './Onboarding.constants';

export const ScreenContainer = styled(Container)({
  backgroundColor: 'white',
});

export const Slider = styled(Animated.View)({
  height: SLIDER_HEIGHT,
  borderBottomRightRadius: Radii.XL,
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
    borderTopLeftRadius: Radii.XL,
    backgroundColor: '$bg',
  }),
);
