import React from 'react';
import { View, Text } from 'react-native';


class QuizMain extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  render() {
    return (
      <View>
        <Text>
          Quiz Main
        </Text>
      </View>
    );
  }
}

export default QuizMain;
