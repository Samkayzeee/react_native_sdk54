import { StyleSheet, Text, TextProps, useColorScheme } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

type ThemedTextPropsType = TextProps;


const ThemedText:React.FC<ThemedTextPropsType> = ({style, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || "light"]; // Fallback to light theme if colorScheme is null

  return (
    <Text 
    style = {[style, { marginVertical: 15 }, { color: theme.text }]}
    {...props}
    />
  )
}

export default ThemedText;

const styles = StyleSheet.create({})