import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import s from './MainContainer.module.scss';

export interface MainContainerProps {
  title?: string
}

const MainContainer: FC<PropsWithChildren<MainContainerProps>> = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <meta itemProp="keywords" content="beer, beer catalog, beer database" />
        <title>
          {title || 'Beer App'}
        </title>
      </Head>
      <div className={s.root}>
        <header className={s.header}>
          <Link href="/">
            <h1 className={s.logo}>Beer App</h1>
          </Link>
        </header>
        <main className={s.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default MainContainer;
