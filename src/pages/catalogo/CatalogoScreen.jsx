import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../App";

export default function CatalogoScreen({ navigation }) {

    const [filmes, setFilmes] = useState([]);

    function searchMovies() {
        axios.get(`${API_URL}/api/filmes/name/asc`)
        .then(res => {
            console.log(res.data)
            setFilmes(res.data);
        })
    }

    useEffect(() => {
        searchMovies()
    }, [])

    return (
        <SafeAreaView style={style.container}>

            <View style={{ flex: 0.3 }}></View>

            <View style={style.headerdiv}>
                <Text style={style.textoTitle}>Catálogo de Filmes Cinenóiz</Text>
            </View>

            
            <ScrollView style={{ flex: 2, marginTop: 20, width: '80%', marginHorizontal: 20 }}>


                {filmes.map(filme => (
                    <View style={style.filmesDiv}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: `${API_URL}${filme.banner}` }} />
                        <Text style={style.tituloFilme}>{filme.titulo}</Text>
                    </View>
                ))}

       
            </ScrollView>

        </SafeAreaView>
    )
}
