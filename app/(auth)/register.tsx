import { StyleSheet } from 'react-native'


// Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedLink from '../../components/ThemedLink';

const Register = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>Register Page</ThemedText>



        <ThemedLink href={"/login"} style={{textAlign: "center"}} >Login Instead</ThemedLink>
    </ThemedView>
  )
}

export default Register;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
})