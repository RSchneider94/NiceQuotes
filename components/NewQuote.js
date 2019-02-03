import React, { Component } from 'react'
import { Modal, View, Button, StyleSheet, TextInput, Text } from 'react-native'

export class NewQuote extends Component {
  render() {
    return (
      <Modal
        animationType='slide'
        visible={this.props.visible}
        onRequestClose={() => this.props.onCancel}>
          <View style={styles.container}>
            <Button title="Abbrechen" onPress={this.props.onCancel} />
            <Button title="Speichern" onPress={this.props.onSave} />
          </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b85b8'
  }
});

export default NewQuote
