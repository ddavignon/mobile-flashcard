import { AsyncStorage } from 'react-native';

const data = [
  {
    title: 'Title Text',
    cardCount: 3,
    key: 'item1'
  },
  {
    title: 'Different Text',
    cardCount: 3,
    key: 'item2'
  },
  {
    title: 'Some Text',
    cardCount: 3,
    key: 'item3'
  }
];


export function getDecks() {
  return data;
}

export function getDeck(id) {

}

export function saveDeckTitle({ title }) {

}

export function addCardToDeck({ title, card }) {

}