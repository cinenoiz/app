import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function AdminScreen({ navigation }) {

    return (
        <SafeAreaView style={style.container}>

            <View style={{ flex: 0.3 }}></View>

            <View style={style.headerdiv}>
                <Image
                    source={require('../../../assets/logo_ntxt.png')}
                    style={style.logo}
                />
                <Text style={style.textoTitle}>Admin Cinenóiz!</Text>
            </View>

            
            <View style={{ flex: 2, marginTop: 20, width: '80%' }}>
                <Text style={{ width: '100%' }}>Selecione uma opção:</Text>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('visugenero');
                }}>
                    <Text style={style.textoTouch}>Visualizar Gêneros</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('formgenero');
                }}>
                    <Text style={style.textoTouch}>Cadastrar Gênero</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('visuprodutora');
                }}>
                    <Text style={style.textoTouch}>Visualizar Produtoras</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('formprodutora');
                }}>
                    <Text style={style.textoTouch}>Cadastrar Produtora</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('visucontato');
                }}>
                    <Text style={style.textoTouch}>Visualizar Contatos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.touchSelect} onPress={() => {
                    navigation.navigate('visuusuario');
                }}>
                    <Text style={style.textoTouch}>Visualizar Usuários</Text>
                </TouchableOpacity>

               
            </View>

        </SafeAreaView>
    )
}
