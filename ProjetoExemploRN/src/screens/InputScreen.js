import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, StyleSheet} from 'react-native';

export const InputScreen = () => {
  const [name, setName] = useState(null);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput onChange={setName} placeholder="What's your name?" />
      <Text>{name && name.length > 0 ? `Hello, ${name}` : ''}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
});
