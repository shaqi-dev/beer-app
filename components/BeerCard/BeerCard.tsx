import React, { FC } from 'react';
import type BeerItem from '../../models/BeerItem';
import s from './BeerCard.module.scss';

interface BeerItemProps {
  beer: BeerItem
}

const formatDescription = (str: string): string => (
  str.length > 140
    ? `${str.slice(0, 140)}...`
    : str
);

const BeerCard: FC<BeerItemProps> = ({ beer }) => (
  <div className={s.root}>
    <div className={s.image}>
      <img src={beer.image_url} alt="Beer" />
    </div>
    <div className={s.body}>
      <h2 className={s.name}>{beer.name}</h2>
      <p>{formatDescription(beer.description)}</p>
    </div>
  </div>
);

export default BeerCard;
