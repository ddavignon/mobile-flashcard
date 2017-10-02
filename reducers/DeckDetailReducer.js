import {
  FETCH_DECK_INFO
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DECK_INFO:
      return action.payload;
    default:
      return state;
  }
};
