import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={[styles.back, styles.link]}>
        Home
      </Link>
      <Text style={styles.heading}>Contact Page</Text>

      <View>
        <Text style={styles.contactInfo}>Email: example@example.com</Text>
        <Text style={styles.contactInfo}>Phone: (123) 456-7890</Text>
        <Text style={styles.contactInfo}>Address: 123 Main St, City, State</Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
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
  contactInfo: {
    fontSize: 14,
    marginVertical: 5,
  }
});
