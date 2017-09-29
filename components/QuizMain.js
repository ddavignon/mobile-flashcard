import React from 'react';
import { View, Text } from 'react-native';
import {
  Button,
  Card
} from 'react-native-elements';


class QuizMain extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  renderCard() {
    return (
      <Card title="Quiz Question Here">
        <Button
          buttonStyle={styles.buttonStyle}
          backgroundColor='#377D22'
          title="Correct"
        />
        <Button
          buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
          title="Incorrect"
          backgroundColor='#C3392A'
        />
      </Card>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        {this.renderCard()}
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  }
};


export default QuizMain;
