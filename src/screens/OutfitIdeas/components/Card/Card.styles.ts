import { Container } from '@components';
import { width } from '@styles';
import { styled } from 'dripsy';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const CARD_WIDTH = width * 0.7;
const CARD_HEIGHT = (425 / 294) * CARD_WIDTH;

export const CardContainer = styled(Container)({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'center',
});
export const AnimatedCard = styled(Animated.View)({
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  backgroundColor: '$primary',
  borderRadius: 'l',
});
