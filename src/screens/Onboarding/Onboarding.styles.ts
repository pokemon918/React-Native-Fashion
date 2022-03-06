import { styled } from 'dripsy';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Container } from '@components';
import { width } from '@styles';

import { SLIDER_HEIGHT, SLIDES } from './Onboarding.constants';

export const ScreenContainer = styled(Container)({
  backgroundColor: '$bg',
});

export const Slider = styled(Animated.View)({
  height: SLIDER_HEIGHT,
  borderBottomRightRadius: 'xl',
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
export const SubslideContainer = styled(Animated.View)({
  width: width * SLIDES.length,
  flex: 1,
  flexDirection: 'row',
  borderTopLeftRadius: 'xl',
  backgroundColor: '$bg',
});
