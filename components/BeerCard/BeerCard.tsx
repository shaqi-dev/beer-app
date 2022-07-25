import React, { FC } from 'react';
import Link from 'next/link';
import type BeerItem from '../../models/BeerItem';
import s from './BeerCard.module.scss';

interface BeerItemProps {
  beer: BeerItem;
}

const formatDescription = (str: string): string => (str.length > 140 ? `${str.slice(0, 140)}...` : str);

const BeerCard: FC<BeerItemProps> = ({ beer }) => (
  <Link href={`/beer/[id]?id=${beer.id}`}>
    <a className={s.root}>
      <div className={s.image}>
        <img
          src={beer.image_url ?? '/assets/img/no-image-placeholder.jpg'}
          alt="Beer"
        />
      </div>
      <div className={s.body}>
        <h2 className={s.name}>{beer.name}</h2>
        <p>{formatDescription(beer.description)}</p>
      </div>
    </a>
  </Link>
);

export default BeerCard;
