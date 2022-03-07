import { StyleSheet } from 'react-native';
import { styled, Image } from 'dripsy';
import { Container } from '@components';
import { Radii } from '@constants';

export const TOP_LEFT_RADIUS = { borderTopLeftRadius: Radii.XL };
export const BOTTOM_RIGHT_RADIUS = {
  borderBottomRightRadius: Radii.XL,
};

export const BackgroundContainer = styled(Container)({
  ...StyleSheet.absoluteFillObject,
});

export const ImagePattern = styled(Image)({
  width: '100%',
  height: '100%',
  borderTopLeftRadius: 'xl',
  borderBottomRightRadius: 'xl',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  resizeMode: 'cover',
});
