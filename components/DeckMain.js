import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './DeckList';


export default class DeckMain extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList {...this.props} />
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
