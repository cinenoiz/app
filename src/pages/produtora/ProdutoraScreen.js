import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Button, TextInput } from 'react-native';
import style from "./Style"
import axios from 'axios';

export default function ProdutoraScreen() {
    const [nomeProducao, setNomeProducao] = useState('');
    const [dados,setDados] = useState()

    const verificar = () => {
        const valores = nomeProducao

        console.log(nomeProducao);

        axios.post('http://localhost:8000/api/produtoras/criar',
            {
                txtNomeProdutora: nomeProducao
            }
        )
        setDados(valores)
    }

    return (
        <View style={style.container}>
            <View>
                <Text>Filme:</Text>
                <TextInput placeholder="Digite o nome do filme." />
                <Button
                    title="Salvar"
                />
            </View>
            <View>
                <Text>Produtora:</Text>
                <TextInput placeholder="Digite o nome da produtora."
                    onChangeText={text => setNomeProducao(text)} />
                <Button
                    title="Salvar"
                    onPress={() => verificar()}
                />
            </View>
            <View>
                <Text>Contato:</Text>
                <TextInput placeholder="Digite o seu contato." />
                <Button
                    title="Salvar"
                />
            </View>
        </View>
    )
}
