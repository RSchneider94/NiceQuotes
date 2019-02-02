import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Alert from './components/Alert';
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
    showAlert: false,
    alertType: 'success',
    screenNewQuote: false
  }

  _hideAlert = () => {
    this.setState({showAlert: false});
  }

  _showAlert = () => {
    this.setState({showAlert: true});
    setTimeout(this._hideAlert, 3000);
  }

  _onCancelBehavior = () => {
    this.setState({ screenNewQuote: false, alertType: 'warning' });
    this._showAlert();
  }

  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    nextIndex === data.length ? nextIndex = 0 : nextIndex;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.headerText}>NiceQuotes</Text>
          <View style={styles.newQuoteButton}>
            <Button
              title="Neues Zitat"
              onPress={() => this.setState({ screenNewQuote: true })} />
          </View>
        </View>
        <Alert
          type={this.state.alertType}
          visible={this.state.showAlert} />
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
    justifyContent: 'center',
    backgroundColor: '#1b85b8'
  },
  navbar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    padding: 0,
    backgroundColor: '#fff'
  },
  headerText: {
    top: 45,
    textAlign: 'center',
    fontSize: 30
  },
  newQuoteButton: {
    position: 'absolute',
    top: 50,
    right: 10
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
  nextQuoteButton: {
    position: 'absolute',
    bottom: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff'
  }
});
