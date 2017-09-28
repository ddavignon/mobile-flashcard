import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { getDecks } from '../utils/api';


class DeckList extends React.Component {

  renderItem = ({ item }) =>
        <ListItem
          title={item.title}
          subtitle={`${item.cardCount} cards`}
          onPress={() => this.props.navigation.navigate(
            'DeckDetail',
            { entryId: item.key }
          )}
        />;

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={getDecks()}
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
