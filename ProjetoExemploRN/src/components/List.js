import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const data = [
  {id: 1, name: 'Aatrox'},
  {id: 2, name: 'Annie'},
  {id: 3, name: 'Darius'},
  {id: 4, name: 'Fiddlesticks'},
  {id: 5, name: 'Hecarim'},
  {id: 6, name: 'Gragas'},
];

const ListItem = ({champ}) => {
  console.log(champ)
  return <Text>{champ.name}</Text>;
};

export const List = () => {
  return (
    <FlatList
      keyExtractor={i => i.id}
      renderItem={i => <ListItem champ={i.item} />}
      data={data}
    />
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
  },
});
