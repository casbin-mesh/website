import { styled } from '@nextui-org/react';

export const StyledTitle = styled('h1', {
  display: 'inline',
  fontWeight: '$bold',
  color: '$text',
  lh: '1.2',
  fs: '3rem',
  '@sm': {
    fs: '4rem'
  },
  '@md': {
    fs: '5rem'
  },
  '@lg': {
    fs: '7rem'
  }
});

export const StyledGradientTitle = styled(StyledTitle, {
  textGradient: '45deg, #6622AA 35%, #aaa4ff 100%',
  '&::selection': {
    WebkitTextFillColor: '$colors$text'
  }
});

export const StyledSubtitle = styled('p', {
  pl: '$1',
  fs: '$sm',
  width: '100%',
  display: 'inline-flex',
  fontWeight: '$medium',
  color: '$accents7'
});
