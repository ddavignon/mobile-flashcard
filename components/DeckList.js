import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { Card, ListItem } from 'react-native-elements';


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

class DeckList extends React.Component {

  renderItem = ({ item }) =>
        <ListItem
          title={item.title}
          subtitle={`${item.cardCount} cards`}
          onPress={() => alert("you pressed!")}
        />;

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch'
  }
}

export default DeckList;
