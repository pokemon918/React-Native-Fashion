import { styled, View } from 'dripsy';
import { height, width } from '@styles';
import type { Colors } from '@constants';

interface IContainerProps {
  flex?: number;
  row?: boolean;
  wWidth?: boolean;
  wHeight?: boolean;
  alignCenter?: boolean;
  spaceBetween?: boolean;
  justifyCenter?: boolean;
  mt?: number;
  bg?: Colors;
}

export const Container = styled(View)(
  ({
    flex,
    row,
    wWidth,
    wHeight,
    alignCenter,
    spaceBetween,
    justifyCenter,
    mt,
    bg,
  }: IContainerProps) => ({
    flex: 1,
    ...(flex && { flex: flex }),
    ...(row && { flexDirection: 'row' }),
    ...(wWidth && { width }),
    ...(wHeight && { height }),
    ...(alignCenter && { alignItems: 'center' }),
    ...(spaceBetween && { justifyContent: 'space-between' }),
    ...(justifyCenter && { justifyContent: 'center' }),
    ...(mt && { marginTop: mt }),
    ...(bg && { backgroundColor: bg }),
  }),
);
