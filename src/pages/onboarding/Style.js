import { StyleSheet } from "react-native";
import FontSize from '../../constants/FontSize';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: FontSize.large,
        fontWeight: '800',
        width: '100%',
        textAlign: 'center'
    }
});
