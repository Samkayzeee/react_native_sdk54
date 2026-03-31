import { StyleSheet, Text, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";

type ThemedLinkProps = React.ComponentProps<typeof Link>;

const ThemedLink: React.FC<ThemedLinkProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"]; // Fallback to light theme if colorScheme is null
  return (
    <Link
      style={[
        {
          color: theme.iconColorFocused,
          borderBottomColor: theme.iconColorFocused,
        },
        { borderBottomWidth: 1 },
        { marginVertical: 5 },
      ]}
      {...props}
    />
  );
};

export default ThemedLink;

const styles = StyleSheet.create({});
