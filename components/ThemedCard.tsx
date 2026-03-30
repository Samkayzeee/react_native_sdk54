import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

type ThemeCardType = ViewProps;

const ThemedCard: React.FC<ThemeCardType> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"]; // Fallback to light theme if colorScheme is null
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
  },
});
