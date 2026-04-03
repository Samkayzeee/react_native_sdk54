import { StyleSheet, Pressable, useColorScheme, PressableProps } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";


type buttonProps = PressableProps & {
    submit: () => void
};

const Button = ({ style, submit, ...props }: buttonProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || "light"];
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.btn]}
      onPress={submit}
      {...props}
    />
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  btn: {
    backgroundColor: Colors.primary,
    color: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
});
