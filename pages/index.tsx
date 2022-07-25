import React, { FC } from 'react';
import PaginatedBeerList from '../components/PaginatedBeerList';
import MainContainer from '../components/MainContainer';

interface IndexProps {
  page: string | undefined;
}

const Page: FC<IndexProps> = () => (
  <MainContainer>
    <PaginatedBeerList />
  </MainContainer>
);

export default Page;
