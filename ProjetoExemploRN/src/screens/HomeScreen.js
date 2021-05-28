import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from '../components/Button';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.content}>
        <Button title="List" onPress={() => navigation.navigate('List')} />
        <Button
          title="Rainbow"
          onPress={() => navigation.navigate('Rainbow')}
          buttonStyle={{ backgroundColor: 'red'}}
        />
        <Button title="List" onPress={() => navigation.navigate('List')} />
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
