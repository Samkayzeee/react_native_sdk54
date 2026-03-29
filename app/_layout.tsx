import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {


    const colorScheme = useColorScheme();
    console.log(colorScheme);
    

  return (
    <Stack
    screenOptions={{
        headerStyle: { backgroundColor: "lightgray" },
        headerTitleStyle: { color: "black", fontWeight: "bold" },
        headerTintColor: "#333", // Back button color
    }}
    >
      <Stack.Screen name="index" options={{ title: "Home" } } />
      <Stack.Screen name="about" options={{ title: "About" } } />
      <Stack.Screen name="contact" options={{ title: "Contact" } } />

    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
