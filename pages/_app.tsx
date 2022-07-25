import React, { FC } from 'react';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app';
import '../scss/style.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <NextNProgress
      color="#000000"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
