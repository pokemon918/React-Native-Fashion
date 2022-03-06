import { Container } from '@components';
import { styled, Text } from 'dripsy';

export const SubslideContainer = styled(Container)({
  paddingX: 32,
  justifyContent: 'center',
  alignItems: 'center',
});
export const Subtitle = styled(Text)({
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 'bold',
  color: '$textDefault',
});
export const Description = styled(Text)({
  marginTop: 12,
  textAlign: 'center',
  fontSize: 16,
  lineHeight: 24,
  color: '$textDefault',
});
