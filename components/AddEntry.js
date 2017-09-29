import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import {
  Button,
  Card,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import { saveDeckTitle } from '../utils/api';


export default class AddEntry extends React.Component {
  state = {
    titleText: '',
    errorMessage: false
  };

  handleSubmit = () => {
    if (this.state.titleText) {
      const { titleText } = this.state;
      saveDeckTitle(titleText);
      this.setState({
        errorMessage: false,
        titleText: ''
      });
      this.props.navigation.navigate(
        'DeckDetail',
        {
          entryId: titleText,
          navTitle: titleText
        },
        Keyboard.dismiss()
      );
    } else {
      this.setState({ errorMessage: true })
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{
        flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
        behavior="padding"
      >
        <Card title="What is the title of your new deck?" >
          <FormInput
            onChangeText={titleText => this.setState({ titleText })}
            value={this.state.titleText}
          />
          <FormValidationMessage>
            {this.state.errorMessage ? 'This field is required': ''}
          </FormValidationMessage>
          <Button
            title="Create Deck"
            raised
            backgroundColor="rgb(72, 149, 236)"
            onPress={this.handleSubmit}
          />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}