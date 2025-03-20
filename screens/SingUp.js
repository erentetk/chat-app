import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../config/constants";
import Button from "../components/Button";

const SingUp = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.Contentcontainer}>
                    <Text style={styles.title}>Creater new account</Text>
                    <TextInput style={styles.input}
                        placeholder="name"
                    />
                    <TextInput style={styles.input}
                        placeholder="Email"
                    />
                    <TextInput style={styles.input}
                        placeholder="Password"
                    />

                    <View style={styles.buttonsContainer}>
                        <Button title="SignIn" variant="primary" />  {/* primary için background color primary */}
                        <Button title="SignUp" variant="secondary" /> {/* secondary için background color secondary */}
                    </View>
                </View>
            </SafeAreaView>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    Contentcontainer: {
        padding: 32
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16
    },
    input: {
        backgroundColor: 'white',
        fontSize: 15,
        padding: 16,
        borderRadius: 6,
        marginBottom: 16,
        paddingVertical: 12, //yukarıdan aşağıya 12px
        paddingHorizontal: 16 //sağdan sola 16px
    },
    buttonsContainer: {
        flexDirection: 'row',  //satırları yatay olarak hizalar
        justifyContent: 'space-between', //butonlar arasında eşit boşluk bırakır
        marginTop: 32 //butonların üstten boşluğu
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 6
    },
    buttonLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})
export default SingUp;