import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import Logo from "../assets/img/initial_samkayzee_logo.jpeg";
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/initial_samkayzee_logo.jpeg")} 
      style={styles.logo}
      />
      <Text style={styles.title}>First Expo Project</Text>
      <Text style={{ marginTop: 10, marginBottom: 30, color: "white", fontWeight: "bold" }}>
        Reading List App
      </Text>

      <Link href={"/about"} style={styles.link}>About Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },

  logo:{
    width: 150,
    height: 150,
    borderRadius: 20,
    marginVertical: 20,
  },

  link: {
    fontSize: 12,
    color: "blue",
    textDecorationStyle: "dashed"
  }
});
