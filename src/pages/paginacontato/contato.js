import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import { API_URL } from '../../../App';

export default function Contato({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    console.log('Mensagem Enviada', `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    // Aqui você poderia enviar os dados para um servidor ou API

    axios.post(`${API_URL}/api/contato/criar`,
      {
      txtEmail: email,
      txtTitulo: name,
        txtMensagem:  message
      }
    ).then(res => {
      navigation.goBack();
    }).catch(err => {
      navigation.goBack();
    })


    setName('');
    setEmail('');
    setMessage('');

    

  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo_ntxt.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Envie uma Mensagem!</Text>
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F5BF02',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    borderRadius: 10,
  },
});
