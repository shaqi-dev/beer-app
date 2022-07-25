import getBeersByPage from './getBeersByPage';
import BeerItem from '../models/BeerItem';

export interface AllBeersReturnType {
  totalBeers: number,
  totalPages: number,
  data: BeerItem[],
}

const getAllBeers = async () => {
  let result: BeerItem[] = [];
  let currentPage = 1;
  return async function getPart(): Promise<AllBeersReturnType> {
    const { data } = await getBeersByPage(currentPage.toString());
    result = [...result, ...data];
    if (data.length === 20) {
      currentPage += 1;
      return getPart();
    }
    return {
      totalBeers: result.length,
      totalPages: currentPage,
      data: result,
    };
  };
};

export default getAllBeers;
