import { styled } from 'dripsy';
import { Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Radii } from '@constants';
import { width } from '@styles';

import { SLIDER_HEIGHT } from '../../Onboarding.constants';

export const Underlay = styled(Animated.View)({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderBottomRightRadius: 'xl',
  overflow: 'hidden',
});

export const Picture = styled(Image)({
  width: width - Radii.XL,
  height: SLIDER_HEIGHT - width * 0.33,
});
