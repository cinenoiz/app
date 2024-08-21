import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { API_URL } from '../../../App';

export default function FormGenero({ navigation }) {
  const [genero, setGenero] = useState('');

  function sendToApi() {
    axios.post(`${API_URL}/api/generos/criar`, {
      txtNomeGenero: genero
    })
    .then(res => {
      navigation.goBack();
    })
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo_ntxt.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Text style={styles.label}>Gêneros:</Text>
        <TextInput style={styles.input} onChangeText={(text) => {
          console.log(text)
          setGenero(text);
        }} />
        <Button title="Salvar" color="#FEC925" onPress={() => { sendToApi() }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 40,
  },
  form: {
    width: '60%',
    alignItems: 'center',
  },
  label: {
    color: 'black',
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#FEC925',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'black',
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

