import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../App";

export default function VisualizarUsuarioScreen({ navigation }) {

    const [usuarios, setUsuarios] = useState([]);

    function searchMovies() {
        axios.get(`${API_URL}/api/clientes`)
        .then(res => {
            console.log(res.data)
            setUsuarios(res.data);
        })
    }

    useEffect(() => {
        searchMovies()
    }, [])

    return (
        <SafeAreaView style={style.container}>

            <View style={{ flex: 0.3 }}></View>

            <View style={style.headerdiv}>
                <Text style={style.textoTitle}>Usuarios Cadastrados Cinenóiz</Text>
            </View>

            
            <ScrollView style={{ flex: 2, marginTop: 20, width: '80%', marginHorizontal: 20 }}>


                {usuarios.map(usuario => (
                    <View style={style.filmesDiv}>
                        <Text style={style.tituloFilme}>Nome: {usuario.nome}</Text>
                        <Text style={style.tituloFilme}>Apelido: {usuario.apelido}</Text>
                        <Text style={style.tituloFilme}>Email: {usuario.email}</Text>
                    </View>
                ))}

       
            </ScrollView>

        </SafeAreaView>
    )
}
