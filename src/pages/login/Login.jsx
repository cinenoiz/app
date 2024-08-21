import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/Colors";
import { Text, useColorScheme, ImageBackground, View, TouchableOpacity, Alert } from "react-native";
import style from "./Style";
import Input from "../../components/Input";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Colors from "../../constants/Colors";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido.').required('Email é obrigatório.'),
    pass: Yup.string().required('Senha é obrigatório.'),
});

export function LoginScreen({ navigation }) {

    return (
        <SafeAreaView style={[style.container]}>

            <View style={{ flex: 0.3 }}></View>

            <View style={style.viewImage}>
                <ImageBackground resizeMode='contain' style={style.image} source={require('../../../assets/logo_ntxt.png')} ></ImageBackground>
            </View>

            <View style={style.loginView}>

                <Formik initialValues={{
                    email: '',
                    pass: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    Alert.alert("Dados", JSON.stringify(values));

                    setTimeout(() => {
                        navigation.replace('loading');
                    }, 5000);
                }}
                >
                    {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                        <View>

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
                                <Text style={style.textLogin}>Login</Text>
                            </TouchableOpacity>

                        </View>
                    )}

                </Formik>


                <View style={style.information}>
                    <TouchableOpacity>
                        <Text style={style.information_choice}>Criar nova conta</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </SafeAreaView>
    )

}
