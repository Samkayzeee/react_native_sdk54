import { StyleSheet } from "react-native";
import React from "react";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const About: React.FC = () => {


  return (
    <ThemedView style={[styles.container]}>
      <ThemedText title={true}>About Page</ThemedText>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
