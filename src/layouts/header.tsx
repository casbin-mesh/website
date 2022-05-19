import React from 'react';
import Head from 'next/head';
import withDefaults from '@utils/with-defaults';
import { toCapitalize } from '@utils/index';
import { SITE_URL } from '@lib/constants';
import { useTheme } from '@nextui-org/react';

export interface HeaderProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultProps = {
  description: 'A scalable authorization application built on Casbin.',
};

if (global.document) {
  const info = [`Let's make the Web prettier 🚀`];

  for (const message of info) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

const Header: React.FC<HeaderProps> = ({ title, description, image, url }) => {
  const { theme, isDark } = useTheme();

  let pageTitle = title ? `${toCapitalize(title)} | ` : '';
  pageTitle += 'Casbin Mesh - A scalable authorization application built on Casbin.';
  return (
    <Head>
      <title>{pageTitle}</title>
      {image && (
        <meta
          property="og:image"
          content={image.startsWith('https://') ? image : `${SITE_URL}${image}`}
        />
      )}
      <meta property="og:title" content={pageTitle} key="title" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta
        name="msapplication-TileColor"
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
      />
      <meta
        name="theme-color"
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
      />
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default withDefaults(Header, defaultProps);
