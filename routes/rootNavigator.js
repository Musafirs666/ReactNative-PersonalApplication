import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/login'
import { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig'
import { InsideStack } from './InsideStack'

const RootNavigator = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {!user ? (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="Inside"
                        component={InsideStack}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default RootNavigator
