import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import styles from './Style';

export default function DevScreen() {


        
    return (
        <View style={styles.container}>
            <View style={styles.devs}>
                <View style={styles.shadowProp}><Image style={styles.image} source={require('../../../assets/allan.png')}/></View>
                <View style={styles.info}>
                <Text style={styles.nomeDevs}>Allan Lima</Text>
                <Text style={styles.funçãoDevs}>é o cara</Text>
                </View>
            </View>
            <View style={styles.devs}>
                <View style={styles.shadowProp}><Image style={[styles.image, styles.shadowProp]} source={require('../../../assets/isabel.png')}/></View>
                <View style={styles.info}>
                <Text style={styles.nomeDevs}>Isabel Souza</Text>
                <Text style={styles.funçãoDevs}>A dançante</Text>
                </View>
            </View >
            <View style={styles.devs}>
                <View style={styles.shadowProp}><Image style={[styles.image, styles.shadowProp]} source={require('../../../assets/ludi.png')}/></View>
                <View style={styles.info}>
                <Text style={styles.nomeDevs}>Ludimyla Pereira</Text>
                <Text style={styles.funçãoDevs}>A mais linda</Text>
                </View>
            </View >
            <View style={styles.devs}>
                <View style={styles.shadowProp}><Image style={[styles.image, styles.shadowProp]} source={require('../../../assets/dandara.png')}/></View>
                <View style={styles.info}>
                <Text style={styles.nomeDevs}>Dandara Ramos</Text>
                <Text style={styles.funçãoDevs}>A dançante parte 2</Text>
                </View>
            </View>
        </View >

    
  );
}
