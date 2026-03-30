import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

type ThemedViewProps = ViewProps;

const ThemedView: React.FC<ThemedViewProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"]; // Fallback to light theme if colorScheme is null

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
