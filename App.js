import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import NewQuote from './components/NewQuote';
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
  state = {
    index: 0,
    screenNewQuote: false
  }

  _onCancelBehavior = () => {
    this.setState({ screenNewQuote: false });
  }

  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    nextIndex === data.length ? nextIndex = 0 : nextIndex;

    return (
      <View style={styles.container}>
        <View style={styles.newQuoteButton}>
          <Button
            title="Neues Zitat"
            onPress={() => this.setState({ screenNewQuote: true })} />
        </View>
        <NewQuote
          visible={this.state.screenNewQuote}
          onCancel={this._onCancelBehavior} />
        <Quote text={quote.text} author={quote.author} />
        <View style={styles.nextQuoteButton}>
          <Button
            title="Nächstes Zitat"
            onPress={() => this.setState({ index: nextIndex })} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },
  quoteText: {
    textAlign: 'center',
    fontSize: 30
  },
  quoteAuthor: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 60
  },
  newQuoteButton: {
    position: 'absolute',
    top: 50,
    right: 10
  },
  nextQuoteButton: {
    position: 'absolute',
    bottom: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff'
  }
});
