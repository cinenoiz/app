import { StyleSheet } from "react-native";
import Colors, { FontColors } from "../../constants/Colors";
import FontSize from '../../constants/FontSize';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    viewImage: {
        flex: 1,
        width: '100%'
    },
    image: {
        height: 200,
        width: '100%'
    },
    loginView: {
        flex: 2,
        width: '80%'
    },
    textError: {
        color: FontColors.red,
        marginVertical: 5
    },
    touchLogin: {
        width: '100%',
        backgroundColor: Colors.primary,
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: FontColors.black,
        borderWidth: 1
    },
    textLogin: {
        width: '100%',
        textAlign: 'center',
        color: FontColors.white,
        fontSize: FontSize.medium,
        fontWeight: '800',
        letterSpacing: 1
    },
    information: {
        width: '100%',
        marginVertical: 20
    },
    information_choice: {
        width: '100%',
        textAlign: 'center',
        fontSize: FontSize.medium,
        color: FontColors.light_back
    }
});
