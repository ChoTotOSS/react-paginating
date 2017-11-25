import request from '../../utils/request';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';

export function fetchData({ limit, page }) {
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/evolution-chain/?limit=${
    limit
  }&offset=${offset}`;
  return {
    types: [FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL],
    promise: () => request(url)
  };
}
