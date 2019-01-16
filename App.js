import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Quote from './components/Quote';

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

    return (
      <View style={styles.container}>
        <Quote text={quote.text} author={quote.author} />
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
