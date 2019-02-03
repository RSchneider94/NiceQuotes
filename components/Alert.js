import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Alert extends Component {
  render() {
    alertText = this.props.type === 'warning' ?
      'Schade, dass du ein neues Zitat nicht erstellt hast.' : 'Erfolg!';
    if(this.props.visible === false) {
      return null;
    }
    return (
      <View style={[styles.alertContainer, this.props.type === 'warning' ? styles.alertWarning : styles.alertSuccess]}>
        <Text style={styles.alertText}>
          {alertText}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  alertContainer: {
    position: 'absolute',
    top: 120,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6
  },
  alertWarning: { backgroundColor: '#d9534f' },
  alertSuccess: { backgroundColor: '#5cb85c' },
  alertClass: {
    display: 'none'
  },
  alertText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});

export default Alert
