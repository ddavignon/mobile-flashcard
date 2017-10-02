import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Badge, Card } from 'react-native-elements';
import { getDecks } from '../utils/api';


class DeckList extends React.Component {
  state = {
    DBdata: []
  };

  fetchDeckDB() {
    getDecks().then((res) => {
      this.setState(() => {
        return {
          DBdata: res
        }
      });
    });
  }

  componentDidMount() {
    this.fetchDeckDB();
  }

  componentDidUpdate() {
    this.fetchDeckDB()
  }

  renderItem = ({ item }) =>
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              {
                entryId: item.key,
                navTitle: item.title
              }
            )}
    >
      <View>
        <Card
          title={item.title}
          subtitle={`${item.questions.length} cards`}
        >
          <Badge
            containerStyle={{ backgroundColor: 'lightblue'}}
          >
            <Text>
              {`${item.questions.length} cards`}
            </Text>
          </Badge>
        </Card>
      </View>
    </TouchableOpacity>;


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
