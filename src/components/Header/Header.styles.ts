import { styled } from 'dripsy';
import { Colors } from '@constants';

import { Row } from '../styled/Row';
import { IconButton } from '../IconButton/IconButton';

export const RowContainer = styled(Row)({
  flex: 0,
  width: '100%',
  paddingX: 3,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const HeaderButton = styled(IconButton)(
  ({ size }: { size: number }) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    paddingLeft: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.RoseWhite,
  }),
);
