import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'


export default class AddEntry extends React.Component {
  state = {
    titleText: '',
    errorMessage: false
  };

  handleSubmit = () => {
    console.log("this is" + this.state.titleText);
    if (this.state.titleText) {

      this.setState({
        errorMessage: false,
        titleText: ''
      })

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
