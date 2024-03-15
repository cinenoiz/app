import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/pages/login/Login';
import HomeScreen from './src/pages/loading/LoadingScreen';
import OnboardingScreen from './src/pages/onboarding/OnboardingScreen';
import DevScreen from './src/pages/devs/DevScreen';
import LoadingScreen from './src/pages/loading/LoadingScreen';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='loading'>
                <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />

                <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />

                <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />

                <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />

                <Stack.Screen name="devs" component={DevScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

