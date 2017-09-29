import React from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Badge,
  Button,
  Card
} from 'react-native-elements';
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers';


class QuizMain extends React.Component {
  state = {
    showQuestion: true,
    questions: this.shuffleQuestions(),
    currentQuestion: 0,
    correctAnswers: 0
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  resetNotification() {
    clearLocalNotification()
      .then(setLocalNotification);
  }

  resetQuiz() {
    this.setState(() =>{
      return {
        showQuestion: true,
          questions: this.shuffleQuestions(),
        currentQuestion: 0,
        correctAnswers: 0
      }
    });
    this.resetNotification()
  }

  backToDeck() {
    const backAction = NavigationActions.back();
    this.resetQuiz();
    this.props.navigation.dispatch(backAction);
    this.resetNotification()
  }

  shuffleQuestions() {
    const questions = this.props.navigation.state.params.questions;
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
    const {
      questions,
      currentQuestion,
      correctAnswers
    } = this.state;

    if (currentQuestion < questions.length) {
      return (
        <Card
          title={
            this.state.showQuestion
              ? `Q: ${questions[currentQuestion].question}`
              : `A: ${questions[currentQuestion].answer}`
          }
        >
          <View>
            <Text
              style={styles.questionsRemaining}
            >
              {`Question ${currentQuestion+1} of ${questions.length}`}
            </Text>
          </View>
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
            onPress={() => {
              this.setState({
                currentQuestion: currentQuestion+1,
                correctAnswers: correctAnswers+1
              });
            }}
          />
          <Button
            buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
            title="Incorrect"
            backgroundColor='#C3392A'
            onPress={() => this.setState({ currentQuestion: currentQuestion+1 })}
          />
        </Card>
      );
    }
    return (
      <Card
        title={`You got ${correctAnswers} out of ${questions.length}`}
      >
        <Button
          buttonStyle={styles.buttonStyle}
          title="Start Over"
          backgroundColor='#377D22'
          onPress={() => this.resetQuiz()}
        />
        <Button
          buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
          title="Back to Deck"
          backgroundColor='#C3392A'
          onPress={() => this.backToDeck()}
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
  questionsRemaining: {
    textAlign: 'center',
    marginBottom: 10
  },
  badgeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0
  }
};


export default QuizMain;
