import React, { Component } from 'react'
import { Modal, View, KeyboardAvoidingView, Button, StyleSheet, TextInput, Text } from 'react-native'

export class NewQuote extends Component {
  state = { author: null, quote: null };

  render() {
    const { author, quote } = this.state;
    const { visible, onCancel, onSave } = this.props;
    return (
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => onCancel}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}>
            <View style={styles.container}>
              <View style={styles.form}>
                <Text style={styles.formHeader}>Neues Zitat</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="words"
                  placeholder="Autor des Zitates"
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({author: text})}
                />
                <TextInput
                  style={[styles.input, styles.inputTextArea]}
                  multiline={true}
                  placeholder="Inhalt des Zitates"
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({quote: text})}
                />
                <Button title="Abbrechen" onPress={onCancel} />
                <Button title="Speichern" onPress={() =>
                  onSave(author, quote)} />
              </View>
            </View>
        </KeyboardAvoidingView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b85b8'
  },
  form: {
    width: '90%',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5
  },
  formHeader: {
    fontSize: 28,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 60,
    marginBottom: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: 'rgba(27, 133, 184, 0.5)',
    borderRadius: 10
  },
  inputTextArea: {
    height: 200
  }
});

export default NewQuote
