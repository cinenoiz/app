import { StyleSheet, Text, View, useWindowDimensions, ImageBackground, StatusBar } from "react-native";
import FontSize from '../../constants/FontSize';

export default function RenderItem({item}) {

    const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions()

    return (
        <View style={[styles.itemContainer, {
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: item.backgroundColor
        }]}>
            <StatusBar backgroundColor={item.backgroundColor} />
            <ImageBackground resizeMode="contain" style={styles.image} source={item.image} />
            <Text style={[styles.text, {
                color: item.textColor
            }]}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40
    },
    image: {
        width: '100%',
        height: 300
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: FontSize.xLarge,
        fontWeight: '800',
        marginHorizontal: 20,
    }
})
