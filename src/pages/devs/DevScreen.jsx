import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';


import styles from './Style';


export default function App() {
  return (
    <View style={styles.container}>


        <View style={{ flex: 0.3 }}></View>

        <View style={styles.viewTitle}>
            <Text style={styles.title}>Desenvolvedores</Text>
        </View>

        <View style={styles.devs}>
            <View style={styles.shadowProp}><Image style={styles.image} source={require('../../../assets/allan.png')}/></View>
            <View style={styles.info}>
            <Text style={styles.nomeDevs}>Allan de Lima</Text>

            <Text style={styles.funçãoDevs}>
            👾 Github:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://github.com/yotozangue')}
                }
                >
                yotozangue 👾</Text>
            </Text>

            <Text style={styles.funçãoDevs}>
                📍Instagram:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://www.instagram.com/yotozangue/')}
                }
                >
                yotozangue📍</Text>
            </Text>

            </View>
        </View>

        <View style={styles.devs}>
            <View style={styles.shadowProp}><Image style={styles.image} source={require('../../../assets/isabel.png')}/></View>
            <View style={styles.info}>
            <Text style={styles.nomeDevs}>Isabel Souza</Text>

            <Text style={styles.funçãoDevs}>
            👾 Github:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://github.com/Isinha-s2')}
                }
                >
                Isinha 👾</Text>
            </Text>

            <Text style={styles.funçãoDevs}>
                📍Instagram:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://www.instagram.com/isouzxx/')}
                }
                >
                isouzxx📍</Text>
            </Text>

            </View>
        </View>

        <View style={styles.devs}>
            <View style={styles.shadowProp}><Image style={styles.image} source={require('../../../assets/ludi.png')}/></View>
            <View style={styles.info}>
            <Text style={styles.nomeDevs}>Ludimyla Pereira</Text>

            <Text style={styles.funçãoDevs}>
            👾 Github:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://github.com/alymidul')}
                }
                >
                alymidul 👾</Text>
            </Text>

            <Text style={styles.funçãoDevs}>
                📍Instagram:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://www.instagram.com/alymidulpetrio/')}
                }
                >
                alymidulpetrio📍</Text>
            </Text>

            </View>
        </View>

        <View style={styles.devs}>
            <View style={styles.shadowProp}><Image style={styles.image} source={require('../../../assets/dandara.png')}/></View>
            <View style={styles.info}>
            <Text style={styles.nomeDevs}>Dandara Costa</Text>

            <Text style={styles.funçãoDevs}>
            👾 Github:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://github.com/d1n4ara')}
                }
                >
                d1n4ara 👾</Text>

            </Text>

            <Text style={styles.funçãoDevs}>
                📍Instagram:{' '}
                <Text style={styles.hyperlinkStyle}
                onPress={
                    () => {Linking.openURL('https://www.instagram.com/d1n4ara/')}
                }
                >
                d1n4ara📍</Text>
            </Text>

            </View>
        </View>
    </View >


  );
}

