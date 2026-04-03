import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

type ThemedCardType = ViewProps;

const ThemedCard = ({ style, ...props }: ThemedCardType) => {
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
