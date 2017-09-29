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
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys).then(stores => {
      return stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = JSON.parse(store[i][1]);
        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions
          };
        }
      }).filter(items => {
        if (items) {
          return typeof items.questions !== 'undefined'
        }
      });
    });
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

export function saveDeckTitle(title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
  } catch (error) {
    console.log(error);
  }
}

export function addCardToDeck(title, card) {
  // console.log("add card", title, card.question, card.answer);
  try {
    AsyncStorage.getItem(title).then(result => {
      const data = JSON.parse(result);

      let questions = data.questions;
      questions.push(card);

      AsyncStorage.mergeItem(title, JSON.stringify({
        questions
      }));
    });
  } catch (error) {
    console.log(error);
  }
  return "thanks"
}