import { SafeAreaView } from "react-native-safe-area-context";
import style from "./Style";
import data from './data';
import RenderItem from "./RenderItem";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ navigation }) {

    const [index, setIndex] = useState(0);
    const [styleButton, setStyleButton] = useState( {
        position: 'absolute',
        bottom: 180,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
    })
    const [textButton, setTextButton] = useState(<Image source={require('../../../assets/ArrowIcon.png')} />);

    function pressButton() {
        setIndex(index + 1);

        if (index + 1 === data.length - 1) {
            setStyleButton({
                position: 'absolute',
                bottom: 180,
                width: '75%',
                height: 100,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 80,
            });
            setTextButton(<Text style={[style.textButton, { color: 'white' }]}>Começar Agora!</Text>)
        }

        if (index === data.length - 1) {
            _storeData = async () => {
                try {
                  await AsyncStorage.setItem(
                    'onboarding',
                    'false',
                  );
                } catch (error) {
                    console.error(error);
                }
            };

            _storeData();

            navigation.replace('login')
        }

    }

    useEffect(() => {
        _retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('onboarding');
                if (value !== null) {
                    navigation.replace('login');
                }
            } catch (error) {

            }
        };
        _retrieveData();
    }, [])

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
