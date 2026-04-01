import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import Logo from "../assets/img/initial_samkayzee_logo.jpeg";
import { Link } from 'expo-router';

// theme component
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedLink from "../components/ThemedLink";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={require("../assets/img/initial_samkayzee_logo.jpeg")} 
      style={styles.logo}
      />
      <ThemedText title={true}>First Expo Project</ThemedText>

      <ThemedLink href={"/login"} >Login</ThemedLink>
      <ThemedLink href={"/register"} >Register Your Account</ThemedLink>
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
});
