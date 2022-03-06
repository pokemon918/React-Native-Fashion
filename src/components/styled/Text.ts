import type { Theme } from 'dripsy';
import { styled, Text as DripsyText } from 'dripsy';

interface ITextProps {
  center?: boolean;
  mt?: number;
  color?: keyof Theme;
}

export const Text = styled(DripsyText, {
  defaultVariant: 'body',
  themeKey: 'text',
})(({ center, mt, color }: ITextProps) => ({
  ...(center && { textAlign: 'center' }),
  ...(mt && { marginTop: mt }),
  ...(color && { color: color }),
}));
