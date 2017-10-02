import { getDecks } from '../utils/api';

import {
  FETCH_DECK_DB
} from './types';



export function fetchDeckDB() {
  return (dispatch) => {
    getDecks().then(data => dispatch({ type: FETCH_DECK_DB, payload: data}));
  }
}