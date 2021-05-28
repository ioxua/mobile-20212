import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from '../components/Button';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const pages = ['List', 'Rainbow', 'Scroll', 'Input'];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        {pages.map(page => {
          return (
            <Button title={page} onPress={() => navigation.navigate(page)} />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    // backgroundColor: 'red',
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  content: {
    paddingHorizontal: 16,
  },
});
