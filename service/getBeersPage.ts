import axios from 'axios';
import API_BASE from '../constants/api';
import BeerItem from '../models/BeerItem';

interface GetBeersPageParams {
  page?: number
  per_page?: number
  beer_name?: string
  id?: string
}

const getBeersPage = async (
  params: GetBeersPageParams,
) => axios.get<BeerItem[]>(API_BASE, { params });

export default getBeersPage;
