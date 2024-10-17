import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ConnectionButton() {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Подключение устройства</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: '#282828',
      position: 'absolute',
      alignSelf: 'center',
      top: '82%',
      marginLeft: '5%',
      marginRight: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#00ff00',
      height: '6%',
      width: '100%',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    buttonText: {
      color: '#00ff00',
      fontSize: 20,
      alignContent: 'center',
    },
  });