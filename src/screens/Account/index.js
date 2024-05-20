import { View, Text, TouchableOpacity } from 'react-native'
import { firebase } from "../../services/firebaseConfig"
import { getAuth, signOut } from "firebase/auth"
import React, { useEffect, useState, userEffect } from 'react'
import styles from './style'
import { getDatabase, onValue, ref } from 'firebase/database'

const db = getDatabase();


export default function Account({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const auth = getAuth();

  function logout() {
    signOut(auth).then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
    });
  }

  function recuperarDados() {
    const userId = auth.currentUser.uid;
    const refUser = ref(db, 'users/' + userId);
    onValue(refUser, (snapshot) => {
      setNome(snapshot.val().nome)
      setEmail(snapshot.val().email)
    });
  }

  useEffect(() => {
    recuperarDados();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Nome: {nome}</Text>
      <Text style={styles.info}>Email: {email}</Text>

      <TouchableOpacity style={styles.button}
        onPress={logout}
      >
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>

    </View>
  )
}