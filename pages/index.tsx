import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import PaginatedBeerList from '../components/PaginatedBeerList';
import MainContainer from '../components/MainContainer';
import getAllBeers from '../service/getAllBeers';
import BeerItem from '../models/BeerItem';
import BeerSearchInput from '../components/BeerSearchInput';

interface IndexProps {
  data: BeerItem[]
}

const Page: FC<IndexProps> = ({ data }) => (
  <MainContainer>
    <BeerSearchInput />
    <PaginatedBeerList data={data} />
  </MainContainer>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await (await getAllBeers())();

  return {
    props: {
      data,
    },
  };
};

export default Page;
