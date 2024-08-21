import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={style.container}>

            <View style={{ flex: 0.3 }}></View>

            <View style={style.headerdiv}>
                <Image
                    source={require('../../../assets/logo_ntxt.png')}
                    style={style.logo}
                />
                <Text style={style.textoTitle}>Bem vindo(a) ao Cinenóiz!</Text>
            </View>

            
            <View style={{ flex: 2, marginTop: 20, width: '80%' }}>
                <Text style={{ width: '100%' }}>Selecione uma opção:</Text>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('adminpainel')
                }}>
                    <Text style={style.textoTouch}>Área ADMIN (restrito)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('catalogo')
                }}>
                    <Text style={style.textoTouch}>Catálogo de Filmes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('contato');
                }}>
                    <Text style={style.textoTouch}>Fale Conosco</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
