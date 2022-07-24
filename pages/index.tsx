import React, { FC } from 'react';
import axios from 'axios';
import type { GetStaticProps, GetStaticPropsResult } from 'next';
import BeerCard from '../components/BeerCard';
import type BeerItem from '../models/BeerItem';

interface Props {
  data: BeerItem[];
}

const index: FC<Props> = ({ data }) => {
  const cards = data.map((beer) => <BeerCard beer={beer} />);

  return (
    <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
      <h1>Beer App</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}
      >
        {cards}
      </div>
    </div>
  );
};

export default index;

export const getStaticProps: GetStaticProps<Props> = async ():
Promise<GetStaticPropsResult<Props>> => {
  const API_BASE = 'https://api.punkapi.com/v2/beers?page=1&per_page=20';
  const { data } = await axios.get<BeerItem[]>(API_BASE);
  return {
    props: { data },
  };
};
