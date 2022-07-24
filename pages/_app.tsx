import React from 'react';
import type { AppProps } from 'next/app';
import '../scss/style.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}