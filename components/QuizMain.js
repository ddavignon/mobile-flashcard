import React from 'react';
import { View, Text } from 'react-native';
import {
  Badge,
  Button,
  Card
} from 'react-native-elements';


class QuizMain extends React.Component {
  state = {
    showQuestion: true,
    questions: this.shuffleQuestions()
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  shuffleQuestions() {
    const questions = this.props.navigation.state.params.questions.filter(element => {
      return element !== undefined;
    });
    let i = questions.length-1;

    do {
      const randomIndex = Math.floor(Math.random()*(questions.length-1));
      const swapTarget = questions[randomIndex];
      questions[randomIndex] = questions[i];
      questions[i] = swapTarget;
      i--;
    } while (i >= 0);

    return questions;
  }

  renderCard() {
    return (
      <Card
        title={this.state.showQuestion ? "Q: Quiz question" : "A: Quiz answer"}
      >
        <View style={styles.badgeStyle}>
          <Badge
            containerStyle={{ backgroundColor: 'violet'}}
            onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}
          >
            <Text>
              {this.state.showQuestion ? "Answer" : "Question"}
            </Text>
          </Badge>
        </View>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Correct"
          backgroundColor='#377D22'
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
  },
  badgeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0
  }
};


export default QuizMain;
