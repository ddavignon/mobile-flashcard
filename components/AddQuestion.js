import React from 'react';
import { View, Text } from 'react-native';


class AddEntry extends React.Component {
  static navigationOptions = ({ navigation }) => {

    console.log(navigation)
    return {
      title: navigation.state.params.navTitle
    }
  };

  render() {
    return (
      <View>
        <Text>
          Add a question goes here
        </Text>
      </View>
    );
  }
}

export default AddEntry;
