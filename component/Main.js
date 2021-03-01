import React, { useEffect, useState } from 'react'
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
import MyTabs from '../Elite/MaintabScreen'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'
import { listTodos } from '../graphql/queries'
import Confirmation from '../screens/Confimation'
import ForgotPassword from '../screens/ForgotPassword'

const Stack = createStackNavigator()

const initialState = { name: '', description: '' }

const Main = (props) => {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    // addTodo()
    // fetchTodos()

  }, [])

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
      console.log('todeos', todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      const todo = { name: "ANy" }
      //   setTodos([...todos, todo])
      //   setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, { input: todo }))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <>
          <Stack.Navigator initialRouteName='splashScreen' >
            <Stack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name='confirmation' component={Confirmation} options={{ headerShown: false }} />
            <Stack.Screen name="signin" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name='forgot' component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name='elite' component={MyTabs} options={{ headerShown: false }} />
          </Stack.Navigator>
        </>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default connect()(Main)