import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import data from './data';
import RenderItem from "./RenderItem";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity } from "react-native";

export default function OnboardingScreen({ navigation }) {

    const [index, setIndex] = useState(0);
    const [styleButton, setStyleButton] = useState( {
        position: 'absolute',
        bottom: 180,
        width: 120,
        height: 120,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    })
    const [textButton, setTextButton] = useState(<Image source={require('../../../assets/ArrowIcon.png')} />);

    function pressButton() {
        setIndex(index + 1);

        if (index + 1 === data.length - 1) {
            setStyleButton({
                position: 'absolute',
                bottom: 180,
                width: '75%',
                height: 120,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
            });
            setTextButton(<Text style={style.textButton}>Começar Agora!</Text>)
        }

        if (index === data.length - 1) {
            navigation.replace('login')
        }


    }

    return (
        <SafeAreaView style={style.container}>

            {data.map((item, i) => {
                return (
                    index === i && <RenderItem item={item} key={i} />
                )
            })}

            <TouchableOpacity style={styleButton} onPress={pressButton}>
                {textButton}
            </TouchableOpacity>
        </SafeAreaView>
    )

}
