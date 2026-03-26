import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import Logo from "../assets/img/initial_samkayzee_logo.jpeg";

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
    marginBottom: 8,
  },

  card: {
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
    marginRight: 10,
    marginLeft: 10,
  },

  logo:{
    width: 150,
    height: 150,
    borderRadius: 20,
    marginVertical: 20,
  }
});
