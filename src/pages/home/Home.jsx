import { SafeAreaView } from "react-native-safe-area-context"
import style from "./Style"
import { Text } from "react-native"
import Button from 'react-bootstrap/Button';

export default function HomeScreen() {

    return (
        <SafeAreaView style={style.container}>
            <Text>Olá!</Text>
        </SafeAreaView>
    )
}
