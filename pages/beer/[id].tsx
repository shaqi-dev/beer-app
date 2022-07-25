import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import MainContainer from '../../components/MainContainer';
import getBeerById from '../../service/getBeerById';
import getAllBeers from '../../service/getAllBeers';
import BeerItem from '../../models/BeerItem';
import BeerPageContent from '../../components/BeerPageContent';
import LinkButton from '../../components/LinkButton';

interface BeerPageProps {
  beer: BeerItem
}

const BeerPage: FC<BeerPageProps> = ({ beer }) => (
  <MainContainer>
    <BeerPageContent beer={beer} />
    <LinkButton href="/" alignSelf="flex-end">Back</LinkButton>
  </MainContainer>
);

export default BeerPage;

export const getStaticPaths = async () => {
  const { data } = await (await getAllBeers())();
  const paths = data.map((beer) => ({ params: { id: beer.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const { data } = await getBeerById(id);

  return {
    props: {
      beer: data[0],
    },
  };
};
