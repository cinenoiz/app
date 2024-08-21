import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../App";

export default function VisualizarGeneroScreen({ navigation }) {

    const [generos, setGeneros] = useState([]);

    function searchMovies() {
        axios.get(`${API_URL}/api/generos`)
        .then(res => {
            console.log(res.data)
            setGeneros(res.data);
        })
    }

    useEffect(() => {
        searchMovies()
    }, [])

    return (
        <SafeAreaView style={style.container}>

            <View style={{ flex: 0.3 }}></View>

            <View style={style.headerdiv}>
                <Text style={style.textoTitle}>Generos Cadastrados Cinenóiz</Text>
            </View>

            
            <ScrollView style={{ flex: 2, marginTop: 20, width: '80%', marginHorizontal: 20 }}>


                {generos.map(genero => (
                    <View style={style.filmesDiv}>
                        <Text style={style.tituloFilme}>{genero.nomeCategoria}</Text>
                    </View>
                ))}

       
            </ScrollView>

        </SafeAreaView>
    )
}
