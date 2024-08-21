import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: 150, 
        height: 150, 
        marginBottom: 40,
    },
    textoTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    headerdiv: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchSelect: {
        backgroundColor: '#F5BF02',
        padding: 8,
        borderRadius: 5,
        marginTop: 10
    },
    textoTouch: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFF'
    },
    filmesDiv: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    tituloFilme: {
        fontSize: 18,
        marginLeft: 10
    }
});
