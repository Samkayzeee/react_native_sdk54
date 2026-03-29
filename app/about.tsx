import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";

const About = () => {
  // const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles.back}>
        Go back
      </Link>

      <Text style={[styles.title, styles.back]}>About Page</Text>
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
  },
  back: {
    position: "absolute",
    top: 40,
    left: 35,
  },
});
