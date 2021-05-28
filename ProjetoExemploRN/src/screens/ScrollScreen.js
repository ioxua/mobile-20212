import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';

import {lorem} from '../assets/lorem';

export const ListScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <Text>{lorem}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
});
