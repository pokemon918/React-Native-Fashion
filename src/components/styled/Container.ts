import { styled, View } from 'dripsy';
import { height, width } from '@styles';

interface IRowContainerProps {
  row?: boolean;
  wWidth?: boolean;
  wHeight?: boolean;
  alignCenter?: boolean;
  spaceBetween?: boolean;
  justifyCenter?: boolean;
  pt?: number;
  pb?: number;
  px?: number;
}

export const Container = styled(View)(
  ({
    row,
    wWidth,
    wHeight,
    alignCenter,
    spaceBetween,
    justifyCenter,
    pt,
    pb,
    px,
  }: IRowContainerProps) => ({
    flex: 1,
    ...(row && { flexDirection: 'row' }),
    ...(wWidth && { width }),
    ...(wHeight && { height }),
    ...(alignCenter && { alignItems: 'center' }),
    ...(spaceBetween && { justifyContent: 'space-between' }),
    ...(justifyCenter && { justifyContent: 'center' }),
    ...(pt && { paddingTop: pt }),
    ...(pb && { paddingBottom: pb }),
    ...(px && { paddingHorizontal: px }),
  }),
);
