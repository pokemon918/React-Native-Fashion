import { Colors } from '@constants';
import React from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { AnimatedCard, CardContainer } from './Card.styles';

interface ICardProps {
  position: number;
}

export const Card = ({ position }: ICardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
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
  });

  const animatedCard = useAnimatedStyle(() => {
    const interTranslateY = interpolate(position, [0, 1], [0, -50]);
    const scale = interpolate(position, [0, 1], [1, 0.9]);
    return {
      backgroundColor: interpolateColor(
        position,
        [0, 1],
        [Colors.GreenLighter, Colors.GreenMedium],
      ),
      transform: [
        { translateX: translateX.value },
        { translateY: interTranslateY },
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
