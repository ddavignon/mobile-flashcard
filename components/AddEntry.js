import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard
} from 'react-native';
import {
  Button,
  FormLabel,
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
      saveDeckTitle(this.state.titleText);
      this.setState({
        errorMessage: false,
        titleText: ''
      });
      this.props.navigation.goBack(Keyboard.dismiss());
    } else {
      this.setState({ errorMessage: true })
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>What is the title of your new Deck?</FormLabel>
        <FormInput
          onChangeText={titleText => this.setState({ titleText })}
          value={this.state.titleText}
        />
        <FormValidationMessage>
          {this.state.errorMessage ? 'This field is required': ''}
        </FormValidationMessage>
        <Button
          title="Submit"
          raised
          backgroundColor="rgb(72, 149, 236)"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
