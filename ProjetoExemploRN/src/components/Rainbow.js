import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Color = ({color = 'red'}) => {
  return (
    <View
      style={{
        ...styles.square,
        backgroundColor: color,
      }}
    />
  );
};

export const Rainbow = () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

  return (
    <ScrollView horizontal>
      {colors.map(c => (
        <Color color={c} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
  },
});
