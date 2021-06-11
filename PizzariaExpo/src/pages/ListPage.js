import React from "react";
import { useContext, useCallback } from "react";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";
import { PizzaContext } from "../services/PizzaContext";
import { PizzaListItem } from "../components/PizzaListItem";
import { useNavigation } from "@react-navigation/core";

const ListPage = () => {
  const { list, exclude } = useContext(PizzaContext);
  const navigation = useNavigation();

  const onUpdate = useCallback((id) => {
    navigation.navigate("Form", {
      id,
    });
  }, []);

  const onDelete = useCallback(
    (id) => {
      exclude(id);
    },
    [exclude]
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={list()}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => {
          return <View style={{ heigth: 15, backgroundColor: "red" }} />;
        }}
        // style={styles.container}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          return (
            <PizzaListItem
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
              price={item.price}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingHorizontal: 12,
  },
  safeAreaView: {
    flexGrow: 1,
  },
});

export { ListPage };
