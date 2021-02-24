import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainScreen from '../screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'
import SplashScreen from '../screens/SplashScreen'

const Stack = createStackNavigator()

const Main = (props) => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <>
                    <Stack.Navigator initialRouteName='splashScreen' >
                        <Stack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="main" component={MainScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="signin" component={SignInScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default connect()(Main)