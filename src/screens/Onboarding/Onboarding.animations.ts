import { width } from '@styles';
import type Animated from 'react-native-reanimated';
import {
  interpolateColor,
  runOnUI,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export const useAnimatedStyles = () => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const animatedBackground = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      [0, width, width * 2, width * 3],
      ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD'],
    ),
  }));
  const animatedFooter = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  const scrollToPosition = (index: number) => {
    'worklet';
    runOnUI(scrollTo)(scrollViewRef, width * (index + 1), 0, true);
  };

  return {
    x,
    onScroll,
    scrollViewRef,
    animatedBackground,
    animatedFooter,
    scrollToPosition,
  };
};
