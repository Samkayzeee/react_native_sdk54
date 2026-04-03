import { Alert, StyleSheet, Text } from 'react-native'


// Themed Components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedLink from '../../components/ThemedLink';
import Button from '../../components/Button';

const handleSubmit = () => {
    console.log("Logging In");   
}

const Login = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>Login Page</ThemedText>

                <Button submit={handleSubmit}>
                    <Text>Login</Text>
                </Button>

        <ThemedLink href={"/register"} style={{textAlign: "center"}} >Register Instead</ThemedLink>
    </ThemedView>
  )
}

export default Login;

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