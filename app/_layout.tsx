import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"]; // Fallback to light theme if colorScheme is null

  return (
    <>
    {/* <StatusBar value="auto" /> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTitleStyle: { color: theme.title, fontWeight: "bold" },
          headerTintColor: theme.title, // Back button color
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
