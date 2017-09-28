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

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4() + s4();
}

export function getDecks() {
  return data;
}

export function getDeck(id) {
  AsyncStorage.getItem(id, (err, result) => {
    return result;
  })
}

export function saveDeckTitle({ title }) {
  try {
    return AsyncStorage.setItem(guid(), JSON.stringify({ title }));
  } catch (error) {
    console.log(error);
  }
}

export function addCardToDeck({ title, card }) {
  try {
    return AsyncStorage.setItem(guid(), JSON.stringify({ title, card }));
  } catch (error) {
    console.log(error);
  }
}