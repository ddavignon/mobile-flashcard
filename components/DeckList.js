import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { getDecks } from '../utils/api';


class DeckList extends React.Component {
  state = {
    DBdata: []
  };

  componentDidMount() {
    getDecks().then((res) => {
      this.setState({ DBdata: res })
    });
  }

  componentWillUpdate() {
    getDecks().then((res) => {
      this.setState({ DBdata: res })
    });
  }

  renderItem = ({ item }) =>
        <ListItem
          title={item.title}
          subtitle={`${item.questions.length} cards`}
          onPress={() => this.props.navigation.navigate(
            'DeckDetail',
            {
              entryId: item.key,
              navTitle: item.title
            }
          )}
        />;

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.state.DBdata}
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
};

export default DeckList;
