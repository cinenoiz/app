import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/Colors";
import { Text, useColorScheme, ImageBackground, View, TouchableOpacity, Alert } from "react-native";
import style from "./Style";
import Input from "../../components/Input";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native-web";
import axios from "axios";
import { API_URL } from "../../../App";

const LoginSchema = Yup.object().shape({
    nome: Yup.string(),
    apelido: Yup.string(),
    email: Yup.string().email('Email inválido.').required('Email é obrigatório.'),
    pass: Yup.string().required('Senha é obrigatório.'),
});

export function SignupScreen({ navigation }) {

    return (
        <SafeAreaView style={[style.container]}>

                <View style={{ flex: 0.3 }}></View>

                <View style={style.loginView}>
                    <Formik initialValues={{
                        nome: '',
                        apelido: '',
                        email: '',
                        pass: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                        Alert.alert("Dados", JSON.stringify(values));


                        console.log(values)
                        
                        axios.post(`${API_URL}/api/cliente/criar`, 
                        {
                            txtNome: values.nome,
                            txtApelido: values.apelido,
                            txtEmail: values.email,
                            txtPassword: values.pass
                        })
                        .then(res => {
                            navigation.replace('loading')
                        })
                        .catch(err => {
                            navigation.replace('loading')
                        })
                    
                    }}
                    >
                        {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                            <View>
                                <Input label={'Nome:'} icon={'user'} placeholder='Digite o seu nome' value={values.nome} onChangeText={handleChange('nome')} onBlur={() => setFieldTouched('nome')} erro={errors.nome} />
                                <Input label={'Apelido:'} icon={'user'} placeholder='Como desejar ser chamado(a)?' value={values.apelido} onChangeText={handleChange('apelido')} onBlur={() => setFieldTouched('apelido')} erro={errors.apelido} />
                                <Input label={'Email:'} icon={'envelope'} placeholder='Digite o seu email' value={values.email} onChangeText={handleChange('email')} onBlur={() => setFieldTouched('email')} erro={errors.email} />
                                {touched.email && errors.email && (
                                    <Text style={style.textError}>{errors.email}</Text>
                                )}
                                <Input label={'Senha:'} icon={'asterisk'} placeholder='Digite a sua senha segura =)' secureTextEntry value={values.pass} onChangeText={handleChange('pass')} onBlur={() => setFieldTouched('pass')} />
                                {touched.pass && errors.pass && (
                                    <Text style={style.textError}>{errors.pass}</Text>
                                )}
                                <TouchableOpacity style={[style.touchLogin, {
                                    backgroundColor: isValid ? Colors.primary : Colors.disabled
                                }]}
                                    disabled={!isValid}
                                    onPress={handleSubmit}
                                >
                                    <Text style={style.textLogin}>Criar Conta</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                    <View style={style.information}>
                        <TouchableOpacity onPress={() => {
                            navigation.replace('login')
                        }}>
                            <Text style={style.information_choice}>Fazer Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


        </SafeAreaView>
    )

}
