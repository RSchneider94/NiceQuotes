import React, { Component } from 'react'
import { Button, TextInput, Text, View } from 'react-native'

export class NewQuote extends Component {
  render() {
    if (this.props.visible === false) {
      return null;
    }
    return (
      <View>
        <Button title="Abbrechen" onPress={this.props.onCancel} />
        <Button title="Speichern" onPress={this.props.onSave} />
      </View>
    )
  }
}

export default NewQuote
