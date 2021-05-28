import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Rainbow} from '../components/Rainbow';

export const RainbowScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Rainbow />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
});
