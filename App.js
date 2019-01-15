import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const data = [
  {
    text: 'Erfolg ist die beste Rache.',
    author: 'Michael Douglas'
  },
  {
    text: 'Das Geheimnis des Erfolges ist, den Standpunkt des anderen zu verstehen.',
    author: 'Henry Ford'
  },
  {
    text: 'Bei den meisten Erfolgsmenschen ist der Erfolg größer als die Menschlichkeit.',
    author: 'Daphne du Maurier'
  }
];

export default class App extends Component {
  state = { index: 0 }

  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    nextIndex === data.length ? nextIndex = 0 : nextIndex;
    let previousIndex = index - 1;
    if(previousIndex < 0) previousIndex = data.length - 1;
    return (
      <View style={styles.container}>
        <Text style={styles.quoteText}>{quote.text}</Text>
        <Text style={styles.quoteAuthor}>-- {quote.author}</Text>
        <Button
            title="Voriges Zitat"
            onPress={() => this.setState({ index: previousIndex })} />
        <Button
            title="Nächstes Zitat"
            onPress={() => this.setState({ index: nextIndex })} />
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
    padding: 20
  },
  quoteText: {
    textAlign: 'center',
    fontSize: 30
  },
  quoteAuthor: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 60
  }
});
