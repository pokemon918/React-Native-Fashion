import { styled, View, Text } from 'dripsy';
import { width } from '@styles';

import { SLIDER_HEIGHT } from '../../Onboarding.constants';

export const TitleContainer = styled(View)(
  ({ isRight }: { isRight?: boolean }) => ({
    height: 100,
    justifyContent: 'center',
    transform: [
      { translateY: (SLIDER_HEIGHT - 100) / 2 },
      { translateX: isRight ? width / 2 - 50 : -width / 2 + 50 },
      { rotate: isRight ? '-90deg' : '90deg' },
    ],
  }),
);

export const Title = styled(Text)({
  fontSize: 80,
  lineHeight: 80,
  color: '$textPrimary',
  textAlign: 'center',
  fontWeight: 'bold',
});
