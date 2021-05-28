import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {List} from '../components/List';

export const ListScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <List />
      {/* <ScrollView>
        <View style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
        }}>
          <Text>Oi mundo</Text>
        </View>

        <Button
          onPress={() => console.log('oi')}
          title="meu botaum"
          color="red"
        />

        <TextInput style={{height: 100}} placeholder="Meu input"/>

        <Rainbow />

        {/* <Text>{lorem}</Text>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    // backgroundColor: 'red',
    flexGrow: 1,
  },
});
