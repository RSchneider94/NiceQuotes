import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Quote extends Component {
  render() {
    const { text, author } = this.props;
    return (
      <View>
        <Text style={styles.quoteText}>{text}</Text>
        <Text style={styles.quoteAuthor}>-- {author}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quoteText: {
    textAlign: 'center',
    fontSize: 30
  },
  quoteAuthor: {
    textAlign: 'right',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 60
  }
});

export default Quote
