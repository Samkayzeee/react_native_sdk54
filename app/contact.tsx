import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Page</Text>

      <View>
        <Text>Email: </Text>
        <Text>Phone: </Text>
        <Text>Address: </Text>
      </View>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 20,
    },
    
})