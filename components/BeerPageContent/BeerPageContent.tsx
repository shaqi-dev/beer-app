import React, { FC } from 'react';
import BeerItem from '../../models/BeerItem';
import s from './BeerPageContent.module.scss';

interface BeerPageContentProps {
  beer: BeerItem
}

const BeerPageContent: FC<BeerPageContentProps> = ({ beer }) => (
  <div className={s.root}>
    <div className={s.image}>
      <img src={beer.image_url ?? '/assets/img/no-image-placeholder.jpg'} alt="Beer" />
    </div>
    <div className={s.info}>
      <div className={s.info__header}>
        <h2 className={s.name}>
          {beer.name}
        </h2>
        <span className={s.tagline}>
          {beer.tagline}
        </span>
      </div>
      <p className={s.description}>
        {beer.description}
      </p>
      <div className={s.info__footer}>
        <span className={s.food_pairing}>
          Food Pairing:
          {' '}
          {beer.food_pairing.join(', ')}
        </span>
        <span className={s.abv}>
          ABV:
          {' '}
          {`${beer.abv}%`}
        </span>
      </div>
    </div>
  </div>
);

export default BeerPageContent;
