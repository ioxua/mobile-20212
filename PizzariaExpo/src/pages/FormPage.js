import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { PizzaContext } from "../services/PizzaContext";
import { Input } from "../components/Input";

const PizzaForm = ({ name = "", id, price = "" }) => {
  const navigation = useNavigation();
  const { save } = useContext(PizzaContext);
  const [currentName, setCurrentName] = useState(name);
  const [currentPrice, setCurrentPrice] = useState(price?.toString());

  const onSave = useCallback(() => {
    const pizza = {
      id: id ?? Math.random().toString(),
      name: currentName,
      price: parseFloat(currentPrice),
      description: "",
      imageUrl: "https://via.placeholder.com/100",
    };
    save(pizza);
    navigation.goBack();
  }, [save, currentName, currentPrice]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Input label="Name" value={currentName} onChange={setCurrentName} />
      <Input
        label="Price"
        value={currentPrice}
        onChange={setCurrentPrice}
      />
      <Button label="Salvar" onClick={onSave} />
    </SafeAreaView>
  );
};

const FormPage = ({ route }) => {
  const { getById } = useContext(PizzaContext);

  const pizza = useMemo(() => {
    return getById(route.params?.id ?? "") ?? {};
  }, [route.params?.id]);

  return <PizzaForm {...pizza} />;
};

const styles = StyleSheet.create({
  safeAreaView: {
    paddingHorizontal: 12,
    flexGrow: 1,
  },
})

export { FormPage };
