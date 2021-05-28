import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = ({onPress, title = '', buttonStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={StyleSheet.flatten([styles.button, buttonStyle])}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#0047ab',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
