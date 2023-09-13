import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Dimensions,
    Pressable,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native'
import { globalStyles } from '../globalStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import * as yup from 'yup'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import SplashScreen from '../components/splashScreen'

const loginSchema = () =>
    yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(5),
    })

const LoginScreen = () => {
    const auth = FIREBASE_AUTH
    const width = Dimensions.get('window').width - 40
    const [isLoading, setIsLoading] = useState(false)
    
    if (isLoading) {
        return <SplashScreen />
    }
    return (
        <SafeAreaView
            style={[
                globalStyles.container,
                { paddingHorizontal: 20, justifyContent: 'center' },
            ]}
        >
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                }}
            >
                <Image
                    source={require('../assets/image-loginPage-ns.png')}
                    style={{
                        width: width,
                        height: 300,
                        resizeMode: 'contain',
                    }}
                ></Image>
                <Text
                    style={[
                        globalStyles.text,
                        {
                            textAlign: 'center',
                            fontSize: 20,
                            fontFamily: 'Poppins-Bold',
                        },
                    ]}
                >
                    Welcome!
                </Text>
                <Text
                    style={[
                        globalStyles.text,
                        {
                            textAlign: 'center',
                            paddingHorizontal: 10,
                            color: 'grey',
                        },
                    ]}
                >
                    This is My portfolio app that contain recently project was I
                    created, all my skills, and also my contacts
                </Text>
            </View>
            <Formik
                validationSchema={loginSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values) => {
                    try {
                        setIsLoading(true)
                        await signInWithEmailAndPassword(
                            auth,
                            values.email,
                            values.password
                        )
                    } catch (error) {
                        console.log(error)
                    } finally {
                        setIsLoading(false)
                    }
                }}
            >
                {(props) => (
                    <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
                        <View>
                            <Image></Image>
                            <TextInput
                                value={props.values.email}
                                onChangeText={props.handleChange('email')}
                                style={{
                                    borderColor: 'black',
                                    borderBottomWidth: 1,
                                    height: 50,
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 14,
                                }}
                                onBlur={props.handleBlur('email')}
                                placeholder="Username (user@gmail.com)"
                            ></TextInput>
                            <Image></Image>
                        </View>
                        <View><Text style={{color:'red'}}>{props.touched.email && props.errors.email}</Text></View>
                        <View>
                            <Image></Image>
                            <TextInput
                                value={props.values.password}
                                onChangeText={props.handleChange('password')}
                                secureTextEntry={true}
                                onBlur={props.handleBlur('password')}
                                style={{
                                    borderColor: 'black',
                                    borderBottomWidth: 1,
                                    height: 50,
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 14,
                                }}
                                placeholder="Password (user123)"
                            ></TextInput>
                            <Image></Image>
                        </View>
                        <View><Text style={{color:'red'}}>{props.touched.password && props.errors.password}</Text></View>
                        <View style={[{ marginTop: 30, alignItems: 'center' }]}>
                            <Pressable
                                onPress={props.handleSubmit}
                                style={{
                                    width: width / 2.2,
                                    height: 50,
                                    backgroundColor: '#4289e5',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 50,
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Bold',
                                        fontSize: 17,
                                    }}
                                >
                                    Login
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </Formik>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default LoginScreen
