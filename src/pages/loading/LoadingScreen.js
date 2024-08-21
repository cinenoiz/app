import React, { useEffect } from 'react';
import { SafeAreaView, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';

export default function LoadingScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.replace('devs');
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.content}>
                <Image source={require('../../../assets/logo_ntxt.png')} style={styles.image} />
                <ActivityIndicator style={styles.spinner} size="large" color="black" />
            </View>
        </SafeAreaView>
    );
}
