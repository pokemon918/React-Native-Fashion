import { styled, View } from 'dripsy';
import { height, width } from '@styles';

interface IContainerProps {
  row?: boolean;
  wWidth?: boolean;
  wHeight?: boolean;
  alignCenter?: boolean;
  spaceBetween?: boolean;
  justifyCenter?: boolean;
  mt?: number;
}

export const Container = styled(View)(
  ({
    row,
    wWidth,
    wHeight,
    alignCenter,
    spaceBetween,
    justifyCenter,
    mt,
  }: IContainerProps) => ({
    flex: 1,
    ...(row && { flexDirection: 'row' }),
    ...(wWidth && { width }),
    ...(wHeight && { height }),
    ...(alignCenter && { alignItems: 'center' }),
    ...(spaceBetween && { justifyContent: 'space-between' }),
    ...(justifyCenter && { justifyContent: 'center' }),
    ...(mt && { marginTop: mt }),
  }),
);
