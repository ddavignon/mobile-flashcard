import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class AddEntry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new Deck?</Text>
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
