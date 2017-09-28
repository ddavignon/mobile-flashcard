import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { getDeck } from '../utils/api';



class DeckDetail extends React.Component {
  state = {
    title: '',
    questions: []
  };
  componentDidMount() {
    getDeck(this.props.navigation.state.params.entryId).then(cardDeck => {
      const { title, questions } = JSON.parse(cardDeck);
      this.setState({
        title,
        questions
      });
    });
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
        <Card title={this.state.title} >
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            {this.state.questions.length} cards
          </Text>
          <View>
            <Button
              icon={{name: 'add-circle'}}
              backgroundColor='#03A9F4'
              buttonStyle={styles.buttonStyle}
              title='Add Card' />
          </View>
          <View>
            <Button
              icon={{name: 'play-arrow'}}
              backgroundColor='#96C051'
              buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
              title='Start Quiz' />
          </View>
        </Card>
      </View>
    )
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

export default DeckDetail;
