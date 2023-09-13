import React from 'react'
import { View, StyleSheet,Image } from 'react-native'

const SplashScreen = () => {
    return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image source={require('../assets/splashicon.png')}></Image>
            </View>
    )
}

const styles = StyleSheet.create({})

export default SplashScreen
