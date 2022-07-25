import getBeersPage from './getBeersPage';
import BeerItem from '../models/BeerItem';

export interface GetAllBeersReturnType {
  totalBeers: number,
  totalPages: number,
  data: BeerItem[],
}

interface GetAllBeersParams {
  beer_name?: string
}

const getAllBeers = async (params: GetAllBeersParams = {}) => {
  let result: BeerItem[] = [];
  const perPage = 80;
  let page = 1;
  return async function getPart(): Promise<GetAllBeersReturnType> {
    const currentParams = {
      page,
      per_page: perPage,
      ...params,
    };
    const { data } = await getBeersPage(currentParams);
    result = [...result, ...data];
    if (data.length === perPage) {
      page += 1;
      return getPart();
    }
    return {
      totalBeers: result.length,
      totalPages: page,
      data: result,
    };
  };
};

export default getAllBeers;
