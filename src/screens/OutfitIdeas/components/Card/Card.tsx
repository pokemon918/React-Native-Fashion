import { Colors } from '@constants';
import React from 'react';
import type Animated from 'react-native-reanimated';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { AnimatedCard, CardContainer } from './Card.styles';

interface ICardProps {
  aIndex: Animated.SharedValue<number>;
  index: number;
  step: number;
  onSwipe: () => void;
}

export const Card = ({ aIndex, index, step }: ICardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const position = useDerivedValue(() => index * step - aIndex.value);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x;
      translateY.value = translationY + ctx.y;
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateY.value = withSpring(0, {
        velocity: velocityY,
      });
    },
  });

  const animatedCard = useAnimatedStyle(() => {
    const interTranslateY = interpolate(
      position.value,
      [0, 1],
      [0, -50],
    );
    const scale = interpolate(position.value, [0, 1], [1, 0.9]);
    return {
      backgroundColor: interpolateColor(
        position.value,
        [0, 1],
        [Colors.GreenLighter, Colors.GreenMedium],
      ),
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value + interTranslateY },
        { scale },
      ],
    };
  });

  return (
    <CardContainer>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedCard style={animatedCard} />
      </PanGestureHandler>
    </CardContainer>
  );
};
