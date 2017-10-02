import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import DeckDetailReducer from './DeckDetailReducer';

export default combineReducers({
  decks: DeckReducer,
  deckDetail: DeckDetailReducer
});
