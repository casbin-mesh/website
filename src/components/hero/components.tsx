import React, { useEffect } from 'react';
import {
  Input,
  Card,
  Row,
  Col,
  Loading,
  Text,
  styled,
  Grid,
  Pagination,
  Tooltip,
  Button,
  StyledButton
} from '@nextui-org/react';
import { useRouter } from 'next/router';
import { levitating } from '@utils/animations';
import { Logo, UserTwitterCard, ThemeSwitch } from '@components';
import { useIsMobile } from '@hooks/use-media-query';
import { darkTheme } from '@theme/shared';

const StyledContainer = styled('div', {
  dflex: 'center',
  position: 'absolute',
  zIndex: '$max',
  '@xsMax': {
    display: 'none'
  }
});

const HeroComponents = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById('nextui-tooltip');
      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);

  return (
    <StyledContainer>

      <Grid
        css={{
          position: 'absolute',
          size: '150px',
          cursor: 'pointer',
          top: '-110px',
          right: '-220px',
          dflex: 'center',
          animation: `${levitating} 18s ease infinite`,
          backgroundColor: '$cardBackground',
          boxShadow: '$sm',
          borderRadius: '$lg'
        }}
        onClick={() => {
          router.push('/docs/guide/getting-started');
        }}
      >
        <Logo size={200} />
      </Grid>


    </StyledContainer>
  );
};

export default HeroComponents;
