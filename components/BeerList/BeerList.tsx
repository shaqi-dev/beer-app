import React, { FC } from 'react';
import s from './BeerList.module.scss';
import type BeerItem from '../../models/BeerItem';
import BeerCard from '../BeerCard';

interface BeerListProps {
  data: BeerItem[] | null
}

const BeerList: FC<BeerListProps> = ({ data }) => {
  const cards = data && data.map((beer) => <BeerCard key={beer.id} beer={beer} />);

  return (
    <div className={s.root}>
      {cards}
    </div>
  );
};

export default BeerList;
