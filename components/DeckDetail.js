import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  getDeckDetails,
  deleteDeck,
} from '../actions';



class DeckDetail extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  componentDidMount() {
    this.props.getDeckDetails(this.props.navigation.state.params.entryId);
  }

  componentDidUpdate() {
    this.props.getDeckDetails(this.props.navigation.state.params.entryId);
  }

  deleteItem() {
    const title = this.props.title;
    this.props.deleteDeck(title);
    this.props.navigation.goBack();
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
        <Card title={this.props.title} >
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            {this.props.questions ? this.props.questions.length : 0} cards
          </Text>
          <View>
            <Button
              icon={{name: 'add-circle'}}
              backgroundColor='#03A9F4'
              buttonStyle={styles.buttonStyle}
              title='Add Card'
              onPress={() => {
                  this.props.navigation.navigate(
                    'AddQuestion',
                    {
                      navTitle: this.props.title,
                      title: this.props.title
                    }
                  );
                }
              }
            />
          </View>
          <View>
            <Button
              icon={{name: 'play-arrow'}}
              backgroundColor='#96C051'
              buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
              title='Start Quiz'
              onPress={() => {
                  this.props.navigation.navigate(
                    'QuizMain',
                    {
                      navTitle: this.props.title,
                      questions: this.props.questions }
                  );
                }
              }
            />
          </View>
        </Card>
        <View>
          <Button
            title="Delete Deck"
            buttonStyle={[styles.buttonStyle, { marginTop: 50 }]}
            backgroundColor="red"
            onPress={() => this.deleteItem()}
          />
        </View>
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

const mapStateToProps = state => {

  const { title, questions } = state.deckDetail ? state.deckDetail : ('', []);

  return { title, questions };
};

export default connect(mapStateToProps, {
  deleteDeck, getDeckDetails })(DeckDetail);
