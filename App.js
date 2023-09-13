import { StyleSheet, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import RootNavigator from './routes/rootNavigator'

export default function App() {
    
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Bold': require('./assets/fonts/poppins/Poppins-Bold.ttf'),
        'Poppins-Semi-Bold': require('./assets/fonts/poppins/Poppins-Regular.ttf'),
        'Poppins-Medium': require('./assets/fonts/poppins/Poppins-Medium.ttf'),
        'Poppins-Regular': require('./assets/fonts/poppins/Poppins-Regular.ttf'),
        Stonewalls: require('./assets/fonts/StoneWalls.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <RootNavigator></RootNavigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontFamily: 'Stonewalls',
        fontSize: 20,
    },
})
