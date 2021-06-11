import React from "react";
import { TextInput as RNTextInput, View, Text, StyleSheet } from "react-native";

const Input = ({ label = "", value, onChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <View>
        <RNTextInput
          style={styles.input}
          value={value}
          onChange={(e) => onChange?.(e?.nativeEvent?.text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 4,
    borderWidth: 1,
  },
});

export { Input };
