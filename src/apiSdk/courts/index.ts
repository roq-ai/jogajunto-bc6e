import axios from 'axios';
import queryString from 'query-string';
import { CourtInterface, CourtGetQueryInterface } from 'interfaces/court';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCourts = async (query?: CourtGetQueryInterface): Promise<PaginatedInterface<CourtInterface>> => {
  const response = await axios.get('/api/courts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCourt = async (court: CourtInterface) => {
  const response = await axios.post('/api/courts', court);
  return response.data;
};

export const updateCourtById = async (id: string, court: CourtInterface) => {
  const response = await axios.put(`/api/courts/${id}`, court);
  return response.data;
};

export const getCourtById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/courts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCourtById = async (id: string) => {
  const response = await axios.delete(`/api/courts/${id}`);
  return response.data;
};
