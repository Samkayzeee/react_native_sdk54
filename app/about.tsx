import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const About = () => {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"]; // Fallback to light theme if colorScheme is null

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Link href={"/"} style={[styles.back, styles.link, { color: theme.iconColorFocused, borderBottomColor: theme.iconColorFocused }]}>
        Go back
      </Link>

      <Text style={[styles.title, { color: theme.text }]}>About Page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  link: {
    fontSize: 12,
    color: "blue",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    marginVertical: 10,
  },
  back: {
    position: "absolute",
    top: 40,
    left: 35,
  },
});
