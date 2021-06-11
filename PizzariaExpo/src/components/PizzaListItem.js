import React from "react";
import { useCallback } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "../components/Button";
import { formatCurrency } from "../utils";

const PizzaListItem = ({
  id,
  name,
  description,
  imageUrl,
  price,
  onDelete,
  onUpdate,
}) => {
  const onClickUpdate = useCallback(() => {
    onUpdate?.(id);
  }, [id]);

  const onClickDelete = useCallback(() => {
    onDelete?.(id);
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {/* <Text>{imageUrl}</Text> */}
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.nameAndPriceContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text>{formatCurrency(price)}</Text>
        </View>
        <Text>{description}</Text>

        <View style={styles.buttons}>
          <Button label={"Editar"} onClick={onClickUpdate} />
          <Button label={"Deletar"} onClick={onClickDelete} type="error" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 12,
  },
  content: {
    flexDirection: "column",
    flexGrow: 1,
  },
  nameAndPriceContainer: {
    flexDirection: "row",
  },
  name: {
    flexGrow: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export { PizzaListItem };
