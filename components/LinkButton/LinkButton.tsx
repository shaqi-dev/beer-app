import React, { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import s from './LinkButton.module.scss';

interface LinkButtonProps {
  href: string
  alignSelf?: string
}

const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({ href, alignSelf = 'auto', children }) => (
  <Link href={href}>
    <a className={s.root} style={{ alignSelf }}>{children}</a>
  </Link>
);

export default LinkButton;
