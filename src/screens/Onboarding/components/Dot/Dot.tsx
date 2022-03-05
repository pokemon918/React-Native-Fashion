import { width } from '@styles';
import React from 'react';
import type Animated from 'react-native-reanimated';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { Container } from './Dot.styles';

export interface IDotProps {
  x: Animated.SharedValue<number>;
  index: number;
}

export const Dot = ({ x, index }: IDotProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value / width,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      x.value / width,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP,
    );

    return {
      opacity: opacity,
      transform: [{ scale }],
    };
  });
  return <Container style={animatedStyle} />;
};
