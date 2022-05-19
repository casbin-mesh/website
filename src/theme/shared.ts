import { createTheme } from '@nextui-org/react';

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
};

export const lightTheme = createTheme({
  type: 'light',
  className: 'nextui-docs-light',
  theme: {
    fonts,
    colors: {
      primary: '$purple600',
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',
      headerBackground: 'hsla(0,0%,100%,0.8)',
      menuBackground: 'rgba(255, 255, 255, 0.5)',
      headerIconColor: '$accents4',
      codeBackground: '#363449',
      codeComment: '$accents7',
      codeCopyIconColor: '$accents2',
      cardBackground: '$white',
      codeHighlight: 'hsl(243, 16%, 30%)',
      backgroundBlur: 'rgba(255, 255, 255, 0.3)',
      blockLinkColor: '#4d1cff',
      blockLinkBackground: '$accents1',
      blockLinkHoverBackground: '#FFD1ED'
    }
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  className: 'nextui-docs-dark',
  theme: {
    fonts,
    colors: {
      primary: '$purple600',
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',
      menuBackground: 'rgba(0,0,0,0.8)',
      headerBackground: 'rgba(0,0,0,0.5)',
      headerIconColor: '$accents8',
      codeBackground: '#111111',
      codeComment: '$accents5',
      codeCopyIconColor: '$accents7',
      codeHighlight: 'hsl(0, 0%, 15%)',
      cardBackground: '$accents0',
      backgroundBlur: 'rgba(255, 255, 255, 0.1)',
      blockLinkColor: '#aaa4ff',
      blockLinkBackground: '$accents1',
      blockLinkHoverBackground: '#55057A'
    }
  }
});