import { width } from '@styles';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import type Animated from 'react-native-reanimated';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { Picture, Underlay } from './PictureSlider.styles';

export interface IPictureProps {
  src: ImageSourcePropType;
  width: number;
  height: number;
}

export interface IPictureSliderProps {
  x: Animated.SharedValue<number>;
  idx: number;
  picture: IPictureProps;
}

export const PictureSlider = ({
  x,
  idx,
  picture,
}: IPictureSliderProps) => {
  const animatedPicturesUnderlay = useAnimatedStyle(() => ({
    opacity: interpolate(
      x.value,
      [(idx - 0.5) * width, idx * width, (idx + 0.5) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    ),
  }));
  return (
    <Underlay key={idx} style={animatedPicturesUnderlay}>
      <Picture
        source={picture.src}
        srcWidth={picture.width}
        srcHeight={picture.height}
      />
    </Underlay>
  );
};
