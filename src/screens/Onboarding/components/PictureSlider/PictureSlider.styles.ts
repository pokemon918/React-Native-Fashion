import { styled } from 'dripsy';
import { Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Radii } from '@constants';
import { width as wWidth } from '@styles';

const PICTURE_WIDTH = wWidth - Radii.XL;
export interface IPictureProps {
  srcWidth: number;
  srcHeight: number;
}
export const Picture = styled(Image)(
  ({ srcWidth, srcHeight }: IPictureProps) => ({
    width: PICTURE_WIDTH,
    height: (srcWidth / srcHeight) * PICTURE_WIDTH,
  }),
);

export const Underlay = styled(Animated.View)({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderBottomRightRadius: 'xl',
  overflow: 'hidden',
});
