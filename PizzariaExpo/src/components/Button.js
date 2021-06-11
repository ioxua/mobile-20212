import React from "react";
import { useMemo } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// type buttonType = 'error'|'info'

const Button = ({ onClick, label, type = "info" }) => {
  const containerStyle = useMemo(() =>
    StyleSheet.flatten([
      styles.container,
      type === "info" && styles.info,
      type === "error" && styles.error,
    ])
  );
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onClick}
      style={containerStyle}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
  },
  info: {
    backgroundColor: "#e6efff",
    borderColor: "#96bdff",
  },
  error: {
    backgroundColor: "#ffe0e0",
    borderColor: "#ff9191",
  },
});

export { Button };
