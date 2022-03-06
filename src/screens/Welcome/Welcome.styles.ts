import { Container } from '@components';
import { Radii } from '@constants';
import { width } from '@styles';
import { styled, Image } from 'dripsy';

import { PICTURE } from './Welcome.constants';

export const ScreenContainer = styled(Container)({
  backgroundColor: '$bg',
});

export const TopBox = styled(Container)({
  backgroundColor: '$default',
  borderBottomRightRadius: 'xl',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const BodyBox = styled(Container)({
  backgroundColor: '$default',
});

export const BodyContent = styled(Container)({
  backgroundColor: '$bg',
  borderTopLeftRadius: 'xl',
  justifyContent: 'space-evenly',
  padding: 3,
  alignItems: 'center',
});
export const Picture = styled(Image)({
  width: width - Radii.XL,
  height: ((width - Radii.XL) * PICTURE.height) / PICTURE.width,
});
