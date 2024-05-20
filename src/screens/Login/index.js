import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import styles from './style'

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(null)

    function validate() {
        if (email == "") {
            setErrorLogin("Informe um e-mail")
        } else if (password == "") {
            setErrorLogin("Informe a senha")
        } else {
            login()
            setErrorLogin(null)
        }
    }

    function login() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Tabs")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorLogin(errorMessage)
            });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo_pra_fazer.png')} />

            {errorLogin != null && (
                <Text style={styles.alert}>{errorLogin}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}
                onPress={validate}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => navigation.navigate('CreateUser')}
            >
                <Text style={styles.buttonCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}