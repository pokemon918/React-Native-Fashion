import { Colors, Radii } from '@constants';
import { makeTheme } from 'dripsy';

const colorsLight = {
  $primary: Colors.Green,
  $default: Colors.RoseWhite,
  $bg: Colors.White,
  $textPrimary: Colors.White,
  $textDefault: Colors.Midnight,
  $iconDefault: Colors.Midnight,
};
const colorsDark: typeof colorsLight = {
  ...colorsLight,
  $bg: Colors.Black,
  $textDefault: Colors.White,
  $iconDefault: Colors.White,
};

export const theme = makeTheme({
  colors: colorsLight,
  radii: {
    s: Radii.S,
    m: Radii.M,
    l: Radii.L,
    xl: Radii.XL,
  },
  customFonts: {
    ['sf']: {
      400: 'sf',
      default: 'sf',
      normal: 'sf',
      500: 'sfMedium',
      600: 'sfSemiBold',
      bold: 'sfBold',
      700: 'sfBold',
    },
  },
  fonts: {
    root: 'sf',
  },
  text: {
    heading: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 30,
      color: '$textDefault',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'default',
      color: '$textDefault',
    },
  },
  button: {
    primary: {
      backgroundColor: Colors.Green,
      color: Colors.White,
    },
    default: {
      backgroundColor: Colors.RoseWhite,
      color: Colors.Midnight,
    },
    transparent: {
      backgroundColor: Colors.Transparent,
      color: Colors.Midnight,
    },
  },
});

export const themeDark = {
  ...theme,
  colors: colorsDark,
  button: {
    ...theme.button,
    transparent: {
      ...theme.button.transparent,
      color: Colors.White,
    },
  },
};

declare module 'dripsy' {
  type AppTheme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends AppTheme {}
}
