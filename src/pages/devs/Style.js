import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    devs: {
        flexDirection: 'row',
        margin: 10,
        width: '90%'

    },

    // Image

    image: {
        width: 120,
        height: 120,
        borderRadius: 8,
    },

    shadowProp: {
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },

    // Nome Aluno
    nomeDevs: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    //Função
    funçãoDevs: {
        fontSize: 16,
        color: 'gray',
        marginTop: 2,
    },

    info: {
        padding: 12,
        marginLeft: 4,
    },
})