import axios from 'axios';
import API_BASE from '../constants/api';
import BeerItem from '../models/BeerItem';

const getBeerById = async (
  id: string,
) => axios.get<BeerItem[]>(`${API_BASE}/${id}`);

export default getBeerById;
