import React from 'react';
import axios from 'axios';
import type { GetStaticProps, GetStaticPropsResult } from 'next';
import type BeerItem from '../models/BeerItem';

interface Props {
  data: BeerItem[];
}

const testStyle = {
  width: '250px',
  heigth: '400px',
};

const index = ({ data }: Props) => {
  const beerCards = data.map((beer) => (
    <div key={beer.id} style={testStyle}>
      <div>
        <img src={beer.image_url} alt="Beer" />
      </div>
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Main page</h1>
      {beerCards}
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
