import { Colors } from '@constants';
import { makeTheme } from 'dripsy';

const colors = {
  $primary: Colors.Green,
  $default: Colors.RoseWhite,
  $bg: Colors.White,
  $textPrimary: Colors.White,
  $textDefault: Colors.Midnight,
};

const theme = makeTheme({
  colors,
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
    bold: {
      fontWeight: 'bold',
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
  },
  modes: {
    dark: {
      colors: {
        ...colors,
        $bg: Colors.Black,
      },
    },
  },
});

declare module 'dripsy' {
  type AppTheme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends AppTheme {}
}

const colorsDark: typeof colors = {
  ...colors,
  $bg: Colors.Black,
};
const themeDark = {
  ...theme,
  colors: colorsDark,
};
export { theme, themeDark };
