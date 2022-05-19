import React from 'react';
import {Container, Row, Text, Link, CSS, Spacer} from '@nextui-org/react';
import { VercelCallout } from '@components';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({ css, containerCss }) => {
  return (
    <Container
      fluid
      className="footer__container"
      gap={2}
      css={{
        zIndex: '$1',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs'
        },
        ...containerCss
      }}
    >
      <Row justify="center" css={css}>
        <Spacer x={0.5} />
      </Row>
      <Row justify="center" css={css}>
        <VercelCallout />
      </Row>
    </Container>
  );
};

export default Footer;
