import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import Logo from "../assets/img/initial_samkayzee_logo.jpeg";
import { Link } from 'expo-router';

// theme component
import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={require("../assets/img/initial_samkayzee_logo.jpeg")} 
      style={styles.logo}
      />
      <Text style={styles.title}>First Expo Project</Text>

      <Link href={"/about"} style={styles.link}>About Page</Link>
      <Link href={"/contact"} style={styles.link}>Contact Page</Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },

  logo:{
    width: 75,
    height: 75,
    borderRadius: 20,
    marginVertical: 20,
  },

  link: {
    fontSize: 12,
    color: "blue",
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    marginVertical: 10,
  }
});
