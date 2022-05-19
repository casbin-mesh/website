import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  Container,
  Row,
  Col,
  Spacer,
  Button,
  Grid,
  Snippet
} from '@nextui-org/react';
import { StyledTitle, StyledGradientTitle, StyledSubtitle } from './styles';
import {Box, Title} from '@primitives';
import {darkTheme} from "@theme/shared";

const DynamicLopperBG = dynamic(() => import('../looper-bg'), {
  ssr: true
});

const DynamicHeroComponents = dynamic(() => import('./components'), {
  ssr: true
});

const Hero: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('docs/guide/getting-started');
  };

  return (
    <Container
      lg={true}
      className="hero__container"
      display="flex"
      alignItems="center"
      justify="space-between"
      wrap="nowrap"
      gap={0}
      as="section"
      css={{
        position: 'relative',
        height: 'calc(84vh - 76px)',
        '@xsMax': {
          height: 'calc(100vh - 64px)'
        }
      }}
    >
        <Box
            css={{
                position: 'absolute',
                top: '-25%',
                left: '-20%',
                zIndex: '-$1',
                [`.${darkTheme} &`]: {
                    left: '30%',
                    right: '-30%',
                    '@xsMax': {
                        right: '-50%'
                    }
                },
                '@xsMax': {
                    top: '10%',
                    right: '-50%',
                    left: '0'
                }
            }}
        >
            <img src="/dark-mode-gradient.svg" alt="dark mode background" />
        </Box>
      <Row
        className="hero__content"
        align="center"
        wrap="wrap"
        css={{
          zIndex: '$2',
          '@mdMax': {
            mt: '80px',
            p: '0 8px'
          },
          '@xsMax': {
            mt: '0px'
          }
        }}
      >
        <Col
          className="hero__left-container"
          css={{
            position: 'relative',
            zIndex: '$2',
            '@md': {
              width: '100%'
            },
            '@mdMax': {
              width: '100%'
            }
          }}
        >
          <StyledTitle css={{ mb: 0 }}>A&nbsp;</StyledTitle>
            <StyledGradientTitle css={{ mb: 0}}>scalable&nbsp;</StyledGradientTitle>
          <StyledTitle css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}>
              authorization layer built on Casbin.
          </StyledTitle>

          <StyledSubtitle className="hero__text-subtitle">
              Fast, scalable and handy.
          </StyledSubtitle>
          <Spacer y={1.5} />
          <Grid.Container
            gap={0}
            alignItems="center"
            css={{
              '@md': {
                mt: '$lg'
              }
            }}
          >
            <Grid xs={12} sm={2} lg={2}>
              <Button
                auto
                rounded
                className="hero__get-started-button"
                size="lg"
                onClick={handleGetStartedClick}
                css={{
                  '@xsMax': {
                    width: '100%',
                    marginBottom: '$8'
                  }
                }}
              >
                Getting Started
              </Button>
            </Grid>
            <Grid xs={12} sm={9} lg={9}>
              <Snippet
                className="hero__snippet"
                tooltipColor="primary"
                css={{
                  borderRadius: '$pill',
                  height: '$space$14',
                  py: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  dflex: 'center',
                  boxShadow: '$sm',
                  bg: '$backgroundContrast',
                  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                    {
                      bf: 'saturate(180%) blur(10px)',
                      bg: '$backgroundBlur'
                    },
                  '@xsMax': {
                    width: '100%'
                  }
                }}
              >
                  docker run -it -p 4002:4002 ghcr.io/casbin/casbin-mesh:latest
              </Snippet>
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
