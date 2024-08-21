import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import FontSize from '../../constants/FontSize';

export default StyleSheet.create({

 container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#FFFFFF'
 },



  devs: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.light_background,

},

// Image

image: {
    width: 120,
    height: 120,
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
},

// Nome Aluno
nomeDevs: {
    fontSize: 20,
    fontWeight: 'bold',
},

//Função
funçãoDevs: {
    fontSize: 16,
    color: 'black',
    marginTop: 2,
},

info: {
    padding: 12,
    marginLeft: 4,
},

hyperlinkStyle: {
    color: '#0000FF',
},

viewTitle: {
    flex: 0.5,
    width: '100%'
},

title: {
    fontSize: FontSize.xxLarge,
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase'
}

})
