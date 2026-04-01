import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

// themed component
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedLink from "../components/ThemedLink";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Contact Page</ThemedText>

      <View>
        <ThemedText style={styles.contactInfo}>
          Email: example@example.com
        </ThemedText>
        <ThemedText style={styles.contactInfo}>
          Phone: (123) 456-7890
        </ThemedText>
        <ThemedText style={styles.contactInfo}>
          Address: 123 Main St, City, State
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
  },
  back: {
    position: "absolute",
    top: 40,
    left: 35,
  },
  contactInfo: {
    fontSize: 14,
    marginVertical: 5,
  },
});
