import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import PaginatedBeerList from '../components/PaginatedBeerList';
import MainContainer from '../components/MainContainer';
import getAllBeers from '../service/getAllBeers';
import BeerItem from '../models/BeerItem';

interface IndexProps {
  data: BeerItem[]
}

const Page: FC<IndexProps> = ({ data }) => (
  <MainContainer>
    <PaginatedBeerList data={data} />
  </MainContainer>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await (await getAllBeers())();

  console.log(data);

  return {
    props: {
      data,
    },
  };
};

export default Page;
