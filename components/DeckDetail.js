import React from 'react';
import { View, Text } from 'react-native';


class DeckDetail extends React.Component {
  render() {
    return(
      <View>
        <Text>Welcome to the page! {this.props.navigation.state.params.entryId}</Text>
      </View>
    );
  }
}

export default DeckDetail;
