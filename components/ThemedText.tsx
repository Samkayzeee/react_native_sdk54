import { StyleSheet, Text, TextProps, useColorScheme } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

type ThemedTextPropsType = TextProps & {
  title?: boolean;
};



const ThemedText = ({ style, title = false, ...props }: ThemedTextPropsType) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light']; // Fallback to light theme if colorScheme is null

  const textColor: string = title ? theme.title : theme.text;

  return (
    <Text style={[{ color: textColor, marginVertical: 10 }, title && styles.title, style]} {...props} />
  );
}

export default ThemedText;

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 25
    }
})