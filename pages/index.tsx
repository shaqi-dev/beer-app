import React, {
  FC, useState, useEffect, ChangeEvent,
} from 'react';
import { GetStaticProps } from 'next';
import PaginatedBeerList from '../components/PaginatedBeerList';
import MainContainer from '../components/MainContainer';
import BeerItem from '../models/BeerItem';
import BeerSearchInput from '../components/BeerSearchInput';
import useDebounce from '../hooks/useDebounce';
import getAllBeers from '../service/getAllBeers';

interface IndexProps {
  data: BeerItem[]
}

const Page: FC<IndexProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState<BeerItem[] | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      (async () => {
        const params = {
          beer_name: debouncedSearchTerm,
        };
        const { data: resData } = await (await getAllBeers(params))();

        console.log(resData);

        if (resData && resData.length > 0) {
          setSearchData(resData);
        } else {
          setSearchData(null);
        }
      })();
    } else {
      setSearchData(null);
    }
  }, [debouncedSearchTerm]);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setSearchTerm(input.value);
  };

  return (
    <MainContainer>
      <BeerSearchInput searchHandler={searchHandler} />
      <PaginatedBeerList data={data} search={searchData} />
    </MainContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await (await getAllBeers())();

  return {
    props: {
      data,
    },
  };
};

export default Page;
