import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Expo Project</Text>
      <Text style={{ marginTop: 10, marginBottom: 30, color: "red" }}>
        Reading List App
      </Text>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>List of Books</Text>
        <Text style={{ marginTop: 10 }}>
          1. The Subtle Act of Not Giving a Fuck
        </Text>
        <Text style={{ marginTop: 10 }}>2. Rich Dad Poor Dad</Text>
        <Text style={{ marginTop: 10 }}>3. The Psychology of Money</Text>
        <Text style={{ marginTop: 10 }}>4. Think And Grow Rich</Text>
        <Text style={{ marginTop: 10 }}>5. The Alchemist</Text>
      </View>
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
});
