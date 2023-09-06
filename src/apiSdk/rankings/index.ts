import axios from 'axios';
import queryString from 'query-string';
import { RankingInterface, RankingGetQueryInterface } from 'interfaces/ranking';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRankings = async (query?: RankingGetQueryInterface): Promise<PaginatedInterface<RankingInterface>> => {
  const response = await axios.get('/api/rankings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRanking = async (ranking: RankingInterface) => {
  const response = await axios.post('/api/rankings', ranking);
  return response.data;
};

export const updateRankingById = async (id: string, ranking: RankingInterface) => {
  const response = await axios.put(`/api/rankings/${id}`, ranking);
  return response.data;
};

export const getRankingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/rankings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRankingById = async (id: string) => {
  const response = await axios.delete(`/api/rankings/${id}`);
  return response.data;
};
