import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/pages/login/Login';
import LoadingScreen from './src/pages/loading/LoadingScreen';
import ProdutoraScreen from './src/pages/produtora/ProdutoraScreen';
import OnboardingScreen from './src/pages/onboarding/OnboardingScreen';
import DevScreen from './src/pages/devs/DevScreen';
import Contato from './src/pages/paginacontato/contato';
import FormGenero from './src/pages/forms-cine/FormGenero';
import HomeScreen from './src/pages/home/Home';
import AdminScreen from './src/pages/admin/AdminScreen';
import CatalogoScreen from './src/pages/catalogo/CatalogoScreen';
import FormProdutora from './src/pages/forms-cine/FormProdutora';
import VisualizarGeneroScreen from './src/pages/generoExibir/VisualizarGenero';
import VisualizarProdutoraScreen from './src/pages/produtoraExibir/VisualizarGenero';
import VisualizarContatoScreen from './src/pages/contatoExibir/VisualizarContato';
import { SignupScreen } from './src/pages/signup/Signup';
import VisualizarUsuarioScreen from './src/pages/usuarioExibir/VisualizarUsuario';

const Stack = createNativeStackNavigator();

export const API_URL = 'http://localhost:8000'

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='onboarding'>
                <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />

                <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />

                <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />

                <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />

                <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />

                <Stack.Screen name="devs" component={DevScreen} options={{ headerShown: false }} />

                <Stack.Screen name="produtora" component={ProdutoraScreen} options={{ headerShown: false }} />

                <Stack.Screen name="contato" component={Contato} options={{ headerShown: true, headerTitle: 'Fale Conosco' }} />
                
                <Stack.Screen name="adminpainel" component={AdminScreen} options={{ headerShown: true, headerTitle: 'Painel Admin' }} />

                <Stack.Screen name="catalogo" component={CatalogoScreen} options={{ headerShown: true, headerTitle: 'Catálogo de Filmes' }} />

                <Stack.Screen name="formgenero" component={FormGenero} options={{ headerShown: true, headerTitle: 'Cadastro de Gêneros' }} />

                <Stack.Screen name="formprodutora" component={FormProdutora} options={{ headerShown: true, headerTitle: 'Cadastro de Produtoras' }} />

                <Stack.Screen name="visugenero" component={VisualizarGeneroScreen} options={{ headerShown: true, headerTitle: 'Visualização de Gêneros' }} />

                <Stack.Screen name="visuprodutora" component={VisualizarProdutoraScreen} options={{ headerShown: true, headerTitle: 'Visualização de Produtoras' }} />

                <Stack.Screen name="visucontato" component={VisualizarContatoScreen} options={{ headerShown: true, headerTitle: 'Visualização de Contatos' }} />
           
                <Stack.Screen name="visuusuario" component={VisualizarUsuarioScreen} options={{ headerShown: true, headerTitle: 'Visualização de Usuarios' }} />
           
            </Stack.Navigator>
        </NavigationContainer>
    );
}

