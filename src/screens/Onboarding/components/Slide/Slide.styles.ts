import styled from '@emotion/native';
import { width } from '@styles';

import { SLIDER_HEIGHT } from '../../Onboarding.constants';

export const TitleContainer = styled.View(
  ({ right }: { right?: boolean }) => ({
    height: 100,
    justifyContent: 'center',
    transform: [
      { translateY: (SLIDER_HEIGHT - 100) / 2 },
      { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
      { rotate: right ? '-90deg' : '90deg' },
    ],
  }),
);

export const Title = styled.Text({
  fontSize: 80,
  lineHeight: 80,
  fontFamily: 'SFProDisplay-Bold',
  color: 'white',
  textAlign: 'center',
});
