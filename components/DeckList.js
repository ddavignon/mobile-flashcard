import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { getDecks } from '../utils/api';


class DeckList extends React.Component {
  state = {
    DBdata: []
  };

  componentDidMount() {
    getDecks().then((res) => {
      this.setState({ DBdata: res })
    }).then(() => console.log(this.state.DBdata));
  }

  componentWillUpdate() {
    getDecks().then((res) => {
      this.setState({ DBdata: res })
    });
  }

  renderItem = ({ item }) =>
      <Card
        title={item.title}
        subtitle={`${item.questions.length} cards`}
        onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              {
                entryId: item.key,
                navTitle: item.title
              }
            )}
      >
        <Text>
          {`${item.questions.length} cards`}
        </Text>
      </Card>;


  render() {
    return (
      <View style={styles.containerStyle}>
        {this.state.DBdata.length > 0
          ?
          <FlatList
            data={this.state.DBdata}
            renderItem={this.renderItem}
          />
          : <Card title="Create a deck to get started!"/>
        }
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
