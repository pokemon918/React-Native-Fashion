import { width } from '@styles';
import React from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { Container } from './Dot.styles';

export interface IDotProps {
  position: { value: number };
  index: number;
}

export const Dot = ({ position, index }: IDotProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      position.value / width,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      position.value / width,
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
