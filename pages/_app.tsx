import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import '../scss/style.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
