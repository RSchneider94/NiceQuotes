import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Quote extends Component {
  render() {
    const { text, author } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.quoteText}>{text}</Text>
        <Text style={styles.quoteAuthor}>&mdash; {author}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingTop: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5
  },
  quoteText: {
    marginBottom: 20,
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'auto'
  },
  quoteAuthor: {
    textAlign: 'right',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 60
  }
});

export default Quote
