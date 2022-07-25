import axios from 'axios';
import API_BASE from '../constants/api';
import BeerItem from '../models/BeerItem';

const getBeerByPage = async (page: string) => {
  const AxiosParams = {
    page,
    per_page: 20,
  };
  return axios.get<BeerItem[]>(API_BASE, { params: AxiosParams });
};

export default getBeerByPage;
