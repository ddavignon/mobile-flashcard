import React from 'react';
import { View, Text } from 'react-native';
import { getDeck } from '../utils/api';


class DeckDetail extends React.Component {
  state = {
    cardDeck: {}
  };
  componentDidMount() {
    getDeck(this.props.navigation.state.params.entryId).then(cardDeck => {
      console.log(cardDeck);
      this.setState({
        cardDeck
      });
    });
  }

  render() {
    return(
      <View>
        <Text>Welcome to the page! {this.props.navigation.state.params.entryId}</Text>
      </View>
    );
  }
}

export default DeckDetail;
