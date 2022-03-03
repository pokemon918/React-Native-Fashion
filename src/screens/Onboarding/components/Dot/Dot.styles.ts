import { styled } from 'dripsy';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)({
  backgroundColor: '$primary',
  width: 8,
  height: 8,
  borderRadius: 4,
  margin: 1,
});
